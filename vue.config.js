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
          ...get_HTMLWebpackPluginsToCompilePugs(),
          get_PluginToHotReloadIncludedPugs()
        ]
    },
    chainWebpack: (...args) => {
        add_ruleForVuePlusPugs.apply(null, args);
    }
}

// abstracted methods
function get_HTMLWebpackPluginsToCompilePugs() {
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const glob = require('glob');
    const plugins = [];
    try {
        glob.sync('src/**/*.pug').forEach(templatePath => {
            const destPath = templatePath.replace('src/', '').replace('.pug', '.html');
            plugins.push(new HtmlWebpackPlugin({
                template: templatePath,
                filename: destPath,
                base: 'dist',
                inject: false
            }));
        });
    } catch (e) {
        throw e;
    }
    return plugins;
}

function add_ruleForVuePlusPugs(webpackConfig) {
    const pugRule = webpackConfig.module.rule('pug');
    pugRule.uses.clear();
    pugRule
        .test(/\.pug$/)
        .oneOf('pug-vue')
          .resourceQuery(/vue/)
          .use('pug-plain-loader')
            .loader('pug-plain-loader')
            .end()
          .end()
        .oneOf('pug-template')
          .use('raw')
            .loader('raw-loader')
            .end()
          .use('pug-plain')
            .loader('pug-plain-loader')
            .end()
        .end()
}

function get_PluginToHotReloadIncludedPugs() {
    const LiveReloadPlugin = require("webpack-livereload-plugin");
    return new LiveReloadPlugin({
        appendScriptTag: true
    });
}
