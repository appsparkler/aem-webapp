const glob = require('glob');
const path = require('path');
const pug = require('pug');
const pugTemplateFiles = glob.sync('**/templates/**/*.pug');


pugTemplateFiles.forEach(template => {
    let file = template.replace('src/', 'dist/');
    file = file.replace('.pug', '.html');
    const html = pug.renderFile(template, { pretty: true });
    console.log(html);
});
