'use strict';

const
    path = require('path'),
    fs = require('fs'),
    dirApp = fs.realpathSync(process.cwd()),
    absPath = relativePath => path.resolve(dirApp, relativePath);


module.exports = {
    pathBuild: absPath('build')
};