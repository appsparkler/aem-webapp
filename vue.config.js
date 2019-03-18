const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.pug',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= HtmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    configureWebpack: {
        plugins: [
            getPluginToHotReloadIncludedPugs()
        ]
    },
    chainWebpack: (...args) => {
        clearPugRuleAndReplaceIt.apply(null, args);
        addRuleForPublicPugs.apply(null, args);
    }
}

// private functions
function getPluginToHotReloadIncludedPugs() {
    const LiveReloadPlugin = require("webpack-livereload-plugin");
    return new LiveReloadPlugin({
        appendScriptTag: true
    });
}

function addRuleForPublicPugs(config) {
    config.module
        .rule('publicpugs')
          .test(/public.*\.pug$/)
          .exclude
            .add(/\.vue$/)
            .end()
          .use('raw')
            .loader('raw-loader')
            .end()
          .use('pug-plain')
            .loader('pug-plain-loader')
            .end();
}

function clearPugRuleAndReplaceIt(config) {
    const pugRule = config.module.rule('pug');
    pugRule.uses.clear();
    pugRule
        .test(/\.pug$/)
        .exclude
        .add(/public.*\.pug$/)
        .end()
        .use('pug-plain-loader')
        .loader('pug-plain-loader');
}
