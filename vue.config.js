const path = require('path');
let vueConfig = {};
let { isDev, isProd } = process.env;

// ASSETS DIR
// vueConfig.assetsDir = '[name]/[contenthash:8]';
vueConfig.assetsDir = '[name]/[chunkhash:8]';
vueConfig.assetsDir = '[name]/[chunkhash:8]-[contenthash:8]';
// if(isProd) vueConfig.assetsDir = '[path]';

// PAGES
vueConfig.pages = get_pages();

// DEV SERVER
vueConfig.devServer = {};
vueConfig.devServer.proxy = 'http://localhost:4502';

// CONFIGURE WEBPACK
vueConfig.configureWebpack = {
    plugins: [],
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        alias:{
        vue$: 'vue/dist/vue.esm.js',
        '$': 'jquery'
        }
    },
    devServer: {
        writeToDisk: true
    },
    optimization: {
        splitChunks: {
            minSize: 1,
        }
    }
};

// CONFIGURE WEBPACK -- PLUGINS
if(isDev) vueConfig.configureWebpack.plugins.push(get_PluginToHotReloadIncludedPugs());
if(isProd) vueConfig.configureWebpack.plugins.push(...get_HTMLWebpackPluginsToCompilePugs());
if(isProd) vueConfig.configureWebpack.plugins.push(get_pluginToCopyAppFolders());
if(isProd) vueConfig.configureWebpack.plugins.push(get_clientLibraryFolderWebpackPlugin());
// UNUTILIZED : if(isProd) vueConfig.configureWebpack.plugins.push(get_pluginToGenerateManifest());

// CHAIN WEBPACK
vueConfig.chainWebpack = (...args) => {
    add_ruleForVuePlusPugs.apply(null, args);
    modify_ruleForFonts.apply(null, args);
    modify_ruleForImages.apply(null, args);
    modify_ruleForSVG.apply(null, args);
    configure_resolve.apply(null, args);
};

module.exports = vueConfig;

// abstracted methods
function configure_resolve(config) {
  config.resolve.alias
    .set('@', path.resolve(__dirname, 'src'));
}

function modify_ruleForSVG(config) {
    const svgRule = config.module.rule('svg');
    svgRule
      .use('file-loader')
        .loader('file-loader')
          .options({
              // name: '[name]/[contenthash:8]/img/[name].[hash:8].[ext]'
              name: 'chunk-vendors/[contenthash:8]/resources/svg/[name].[hash:8].[ext]'
            })
          .end()
        .end()
      .end()
    /* config.module.rule('svg')
    {
      test: /\.(svg)(\?.*)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]/[contenthash:8]/img/[name].[hash:8].[ext]'
          }
        }
      ]
    }
    */
}

function modify_ruleForImages(config) {
    const imageRule = config.module.rule('images');
    imageRule
        .use('url-loader')
        .loader('url-loader')
        .options({
            limit: 4096,
            fallback: {
                loader: 'file-loader',
                options: {
                    // name: '[name]/[contenthash:8]/img/[name].[hash:8].[ext]'
                    // name: 'chunk-vendors/[contenthash:8]/resources/fonts/[name].[hash:8].[ext]'
                    name: 'chunk-vendors/[contenthash:8]/resources/images/[name].[hash:8].[ext]'
                }
            }
        })
        .end()
        .end()
        .end()
    /* config.module.rule('images')
    {
      test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 4096,
            fallback: {
              loader: 'file-loader',
              options: {
                name: '[name]/[contenthash:8]/img/[name].[hash:8].[ext]'
              }
            }
          }
        }
      ]
    },
    */
}

function modify_ruleForFonts(config) {
    const fontRule = config.module.rule('fonts');
    fontRule
        .use('url-loader')
        .loader('url-loader')
        .options({
            limit: 4096,
            fallback: {
                loader: 'file-loader',
                options: {
                    // name: 'fonts/[name].[hash:8].[ext]'
                    name: 'chunk-vendors/[contenthash:8]/resources/fonts/[name].[hash:8].[ext]'

                }
            }
        })
        .end()
        .end()
}

function get_pluginToCopyAppFolders() {
    try {
        const CopyPlugin = require('copy-webpack-plugin');
        const plugin = new CopyPlugin([
            // templates
            {
                from: 'src/templates/**/*?.*',
                transformPath: path => path.replace('src\\', ''),
                ignore: ['**/*.pug', '**/*.vue'],
                force: true
            },
            // experiences
            {
                from: 'src/experiences/**/*?.*',
                transformPath: path => path.replace('src\\', ''),
                ignore: ['**/*.pug', '**/*.vue'],
                force: true
            },
            // .content.xml files
            {
                from: 'src/**/.content.xml',
                transformPath: path => path.replace('src\\', ''),
                force: true
            },
            // chunk-common
            {
                from: 'src/**/chunk-common/*?.*',
                transformPath: path => path.replace('src\\', ''),
                force: true
            },
            // chunk-vendors
            {
                from: 'src/**/chunk-vendors/*?.*',
                transformPath: path => path.replace('src\\', ''),
                force: true
            },
            // clientlibs
            {
                from: 'src/clientlibs/**/*?.*',
                transformPath: path => path.replace('src\\', ''),
                force: true
            }
        ], {
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
            'templates/global/BasePage/BasePage-publish-libs': {
                // entry for the page
                entry: path.resolve('src/templates/global/BasePage/main.js'),
                // the source template
                template: path.resolve('src/templates/global/BasePage/index.pug'),
                // output as dist/index.html
                filename: isDev ? 'basepage/index.html' : 'recycle-bin/basepage/index.html',
                // when using title option,
                // template title tag needs to be <title><%= HtmlWebpackPlugin.options.title %></title>
                title: 'Base Page',
                // chunks to include on this page, by default includes
                // extracted common chunks and vendor chunks.
                chunks: [
                  'chunk-vendors',
                  'chunk-common',
                  'templates/global/BasePage/BasePage-publish-libs'
                ]
            },
            /* experiences */
            'experiences/global/xt-navbar/xt-navbar-publish-libs': {
                // entry for the page
                entry: path.resolve('src/experiences/global/xt-navbar/index.js'),
                // the source template
                template: path.resolve('src/experiences/global/xt-navbar/index.pug'),
                // output as dist/index.html
                filename: isDev ? 'experiences/global/xt-navbar/index.html' : 'recycle-bin/experiences/global/xt-navbar/index.html',
                // when using title option,
                // template title tag needs to be <title><%= HtmlWebpackPlugin.options.title %></title>
                title: 'XT Navbar',
                // chunks to include on this page, by default includes
                // extracted common chunks and vendor chunks.
                chunks: [
                  'chunk-vendors',
                  'chunk-common',
                  'experiences/global/xt-navbar/xt-navbar-publish-libs'
                ]
            },
            'experiences/global/xt-image-link/xt-image-link-publish-libs': {
                // entry for the page
                entry: path.resolve('src/experiences/global/xt-image-link/index.js'),
                // the source template
                template: path.resolve('src/experiences/global/xt-image-link/index.pug'),
                // output as dist/index.html
                filename: isDev ? 'experiences/global/xt-image-link/index.html' : 'recycle-bin/experiences/global/xt-image-link/index.html',
                // when using title option,
                // template title tag needs to be <title><%= HtmlWebpackPlugin.options.title %></title>
                title: 'XT Image Link',
                // chunks to include on this page, by default includes
                // extracted common chunks and vendor chunks.
                chunks: [
                  'chunk-vendors',
                  'chunk-common',
                  'experiences/global/xt-image-link/xt-image-link-publish-libs'
                ]
            },
            'experiences/global/xt-container/xt-container-publish-libs': {
                // entry for the page
                entry: path.resolve('src/experiences/global/xt-container/index.js'),
                // the source template
                template: path.resolve('src/experiences/global/xt-container/index.pug'),
                // output as dist/index.html
                filename: isDev ? 'experiences/global/xt-container/index.html' : 'recycle-bin/experiences/global/xt-container/index.html',
                // when using title option,
                // template title tag needs to be <title><%= HtmlWebpackPlugin.options.title %></title>
                title: 'XT Container',
                // chunks to include on this page, by default includes
                // extracted common chunks and vendor chunks.
                chunks: [
                  'chunk-vendors',
                  'chunk-common',,
                  'experiences/global/xt-container/xt-container-publish-libs'
                ]
            }
        };
        if(isDev) pages['AppIndex'] = {
            // entry for the page
            entry: path.resolve('src/main.js'),
            // the source template
            template: path.resolve('src/index.pug'),
            // output as dist/index.html
            filename: isDev ? 'index.html' : 'recycle-bin/index.html',
            // when using title option,
            // template title tag needs to be <title><%= HtmlWebpackPlugin.options.title %></title>
            title: 'App Index',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'AppIndex']
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
        .options({ basedir: path.resolve('src') })
        .end()
        .end()
        .oneOf('pug-template')
        .use('raw')
        .loader('raw-loader')
        .end()
        .use('pug-plain')
        .loader('pug-plain-loader')
        .options({ basedir: path.resolve('src') })
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

function get_pluginToGenerateManifest() {
    try {
        const ManifestPlugin = require('webpack-manifest-plugin');
        return new ManifestPlugin({
            filter(fd) {
                if(fd.isChunk) return true;
                else return false;
            }
        });
    } catch (e) {
        console.log('error in get_pluginToGenerateManifest : ' + e);
    }
}

function get_clientLibraryFolderWebpackPlugin() {
    const ClientLibFolderWebpackPlugin = require('./ClientLibraryFolderWebpackPlugin.js');
    return new ClientLibFolderWebpackPlugin();
}
