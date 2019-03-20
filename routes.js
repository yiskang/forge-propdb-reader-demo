/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

const express = require('express');
const propdb = require('./PropMgrSingleton');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const dbId = req.params.id;
    if( !dbId )
      return res.status(404).end();

    const query = `SELECT _objects_id.id as dbId,
                  _objects_id.external_id as externalId,
                  _objects_attr.name,
                  _objects_attr.display_name,
                  _objects_attr.data_type,
                  _objects_attr.data_type_context as 'units',
                  _objects_attr.flags,
                  _objects_attr.category,
                  _objects_val.value
                  FROM _objects_eav
                  LEFT JOIN _objects_id ON _objects_id.id = _objects_eav.entity_id
                  LEFT JOIN _objects_attr ON _objects_attr.id = _objects_eav.attribute_id
                  LEFT JOIN _objects_val ON _objects_val.id = _objects_eav.value_id where _objects_id.id = ${ dbId }`;

    propdb.open();
    const data = await propdb.exec(query)
    if(!data)
      throw new Error('Failed to read properties');

    res.json(data);
    propdb.close();
  } catch(err) {
    propdb.close();
    res.status(501).end();
  }
});

module.exports = router;