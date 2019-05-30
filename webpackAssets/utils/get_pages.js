const path = require('path');
const _ = require('underscore')
const appConfig = require(path.resolve('appConfig.json'));

module.exports = function (isDev) {
  try {
    var nodesForGeneratingPages = [
      "aem-components",
      "experiences",
      "templates"
    ];
    var pages = {};
    nodesForGeneratingPages.forEach(
      path1 => {
        const componentTypeObj = appConfig[path1];
        Object.keys(componentTypeObj).forEach(
          path2 => {
            const categoryObj = appConfig[path1][path2]
            Object.keys(categoryObj).forEach(
              componentNode => {
                const component = appConfig[path1][path2][componentNode];
                pages[`${path1}/${path2}/${component.name}/${component.name}-publish-libs`] = {
                  entry: path.resolve(`src/${path1}/${path2}/${component.name}/index.js`),
                  template: path.resolve(`src/${path1}/${path2}/${component.name}/index.pug`),
                  filename: isDev ?
                  `${path1}/${path2}/${component.name}/index.html` :
                  `recycle-bin/${path1}/${path2}/${component.name}/index.html`,
                  title: component.title,
                  chunks: component.chunks
                }
              }
            )
          }
        )
      }
    )
    return pages;
  } catch (e) {
      console.error(e)
  }
}