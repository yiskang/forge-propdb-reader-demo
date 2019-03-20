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
const routes = require('./routes');
const PORT = 8080;

const app = express();
app.use('/api/props', routes);
const server = app.listen( PORT, undefined, function() {
	console.log( 'Server running on port %d', server.address().port );
});

server.on( 'error', function( error ) {
	if( error.code === 'EADDRINUSE' ) {
		console.log( 'Error: Port %d is already in use, select a different port.', PORT );
	} else if( error.code === 'EACCES' ) {
		console.log( 'Error: This process does not have permission to listen on port %d.', PORT );
		if( PORT < 1024 ) {
			console.log( 'Try a port number higher than 1024.' );
		}
	}
	console.log( error );
	process.exit( 1 );
});

server.on( 'close', function() {
	console.log( 'Server stopped.' );
});

process.on( 'SIGINT', function() {
	server.close( function() {
		process.exit( 0 );
	});
});