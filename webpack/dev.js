const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob');
const path = require('path');

// CREATING HTML WEBPACK PLUGINS WITH PUG FILES
const pugTemplateFiles = glob.sync('**/templates/**/*.pug');
const HtmlWebpackPlugins = [];
pugTemplateFiles.forEach(template => {
    let file = template.replace('src/', 'dist/');
    file = file.replace('.pug', '.html');
    console.log(file);
    HtmlWebpackPlugins.push(new HtmlWebpackPlugin({
        file,
        template
    }));
});

module.exports = {
    entry: 'console.log()',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'somefilename.js'
    },
    module: {
        rules: [
            // PUG
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },

    plugins: HtmlWebpackPlugins.concat([
        // add more plugins if required
    ])
}
