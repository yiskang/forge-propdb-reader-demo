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
const sqlite3 = require('sqlite3').verbose();

class PropMgr {
  constructor(dbpath) {
    this.path = dbpath;
    this.db = null;
  }

  open() {
    this.db = new sqlite3.Database(this.path);
  }

  exec(query) {
    return new Promise((resolve, reject) => {
      if(!query)
        return reject(new Error('Query is empty'));

      this.db.serialize(() => {
        this.db.all(query, (err, data) => {
          if(err)
            return reject(err);

          resolve(data);
        });
      });
    });
  }

  close() {
    this.db.close();
  }
}

module.exports = PropMgr;