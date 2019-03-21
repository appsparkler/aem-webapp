let vueConfig = {};
let { isDev, isProd } = process.env;

// ASSETS DIR
if(isProd) vueConfig.assetsDir = '[id]-libs-v-[chunkhash]';

// PAGES
if(isDev) vueConfig.pages = get_pages();

// CONFIGURE WEBPACK
vueConfig.configureWebpack = {
    plugins: [
        ...get_HTMLWebpackPluginsToCompilePugs()
    ]
};

// CONFIGURE WEBPACK -- PLUGINS
if(isDev) vueConfig.configureWebpack.plugins.push(get_PluginToHotReloadIncludedPugs())
if(isProd) vueConfig.configureWebpack.plugins.push(get_pluginToCopyAppFolders());

// CHAIN WEBPACK
vueConfig.chainWebpack = (...args) => {
    add_ruleForVuePlusPugs.apply(null, args);
};

module.exports = vueConfig;

// abstracted methods
function get_pluginToCopyAppFolders() {
    try {
        const CopyPlugin = require('copy-webpack-plugin');
        const plugin = new CopyPlugin([{
                from: 'src/templates/**/*?.*',
                transformPath: path => path.replace('src/', ''),
                ignore: ['**/*.pug', '**/*.vue'],
                force: true
            },
            {
                from: 'src/includes/**/*?.*',
                transformPath: path => path.replace('src/', ''),
                ignore: ['**/*.pug', '**/*.vue'],
                force:true

            },
            {
                from: 'src/components/**/*?.*',
                transformPath: path => path.replace('src/', ''),
                ignore: ['**/*.pug', '**/*.vue'],
                force: true
            },
            {
                from: 'src/**/.content.xml',
                transformPath: path => path.replace('src/', ''),
                force: true
            }
        ],{
          copyUnmodified: true
        });
        return plugin;
    } catch (e) {
        throw "error in getting plugin to copy App Folders " + e;
    }
}

function get_pages() {
    try {
        let pages = {
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
        };
        return pages;
    } catch (e) {
        throw "Error in getting pages : " + e;
    }
}

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
    try {
        if(process.env.isDev) {
            const LiveReloadPlugin = require("webpack-livereload-plugin");
            return new LiveReloadPlugin({
                appendScriptTag: true
            });
        }
    } catch (e) {

    }
}
