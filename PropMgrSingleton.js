const path = require('path');
const PROPDB = path.join(__dirname, 'model.sdb');
const PropMgr = require('./PropsMgr');

module.exports = new PropMgr(PROPDB);