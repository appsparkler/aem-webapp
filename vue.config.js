const htmlWebpackPlugin = require('html-webpack-plugin');

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
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    chainWebpack: config => {
      const pugRule = config.module.rule('pug');
      pugRule.uses.clear();

      pugRule
        .test(/\.pug$/)
        .exclude
          .add(/public.*\.pug$/)
          .end()
        .use('pug-plain-loader')
          .loader('pug-plain-loader');

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

        // config.module
        // .rule('pug')
        // .test(/\.pug$/)
        // .uses
        // .delete('pug-plain-loader')
        // .end()
        // .use('pug-loader')
        // .loader('pug-loader');




        /*
        {
            test: /\.pug$/,
            exclude: /pages.*\.pug$/,
            use: ['cache-loader', 'pug-plain-loader']
        },


        // PUG LOADER FOR PURE PUG TEMPLATES
        {
            test: /pages.*\.pug$/,
            exclude: /\.vue$/,
            use: ['cache-loader', 'raw-loader', 'pug-plain-loader']
        },

        */
}
