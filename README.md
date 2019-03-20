[![Node.js](https://img.shields.io/badge/Node.js-8.9.4-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-5.8.0-blue.svg)](https://www.npmjs.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

# Forge Viewer PropertyDB reader server sample

## Overview

This sample is for demonstrating how to read Forge Viewer PropertyDB (e.g. model.sdb) and host it as Web API server.

## Requirements

* node.js v8.9.4 or later

<a name="setup"></a>
## Setup

1. Download and install [Node.js](http://nodejs.org/) (that will install npm as well)
2. Download this repo anywhere you want
3. Execute 'npm install', this command will download and install the required node modules automatically for you. <br />
   ```bash
   npm install
   ```

<a name="UseOfTheSample"></a>
## Use of the sample

1. Run the server <br />
   ```bash
   npm start
   ```

2. The API entery point is http://127.0.0.1:8080/api/props/:id, the id parameter is the dbId of the Forge Viewer <br />

3. Replace the `model.sdb` under the root folder to yours.


## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.

## Written by

Eason Kang <br />
Forge Partner Development <br />
https://developer.autodesk.com/ <br />
https://forge.autodesk.com/blog <br />