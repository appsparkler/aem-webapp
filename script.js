const fs = require('fs-extra');
const appConfig = require('./appConfig.json');
const path = require('path');
//
const pathToAEMAppDist = path.join(appConfig.pathToAEMApp, 'dist');

fs.removeSync(pathToAEMAppDist);
fs.copySync('dist', pathToAEMAppDist);
