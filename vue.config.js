const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob');
const pugTemplateFiles = glob.sync('**/templates/**/*.pug');
const HtmlWebpackPlugins = [];
pugTemplateFiles.forEach(template => {
    let file = template.replace('src/', 'dist/');
    file = file.replace('.pug', '.html');
    HtmlWebpackPlugins.push(new HtmlWebpackPlugin({
        file,
        template
    }));
});

module.exports = {
    configureWebpack: {
      plugins:[
        new HtmlWebpackPlugin({
          template: 'src/index.pug',
          file: 'index.html'
        })
      ]
        // plugins: HtmlWebpackPlugins.concat([
        //     // add more plugins if required
        // ])
    }
}


async function getGlob(pattern) {
    return new Promise()
}
