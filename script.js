var glob = require('glob');
var globArray = glob.sync('dist/**/*-publish-libs');

console.log(globArray);
