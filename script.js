const appConfig = require('./appConfig.json');
const path = require('path');
const _ = require('underscore')

// get_pages();
// create_pageObject.call(null, appConfig, true);

exports.getPages = function (isDev) {
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

function create_pageObject(appConfig, isDev) {
    var inputObject = appConfig.aemComponents.global['image-link'];

    var pages = {
      [`aem-components/global/${inputObject.name}/${inputObject.name}-publish-libs`] :{
        entry: path.resolve(`src/aem-components/global/${inputObject.name}/index.js`),
        template: path.resolve(`src/aem-components/global/${inputObject.name}/index.pug`),
        filename: isDev ?
        `aem-components/global/${inputObject.name}/index.html` :
        `recycle-bin/aem-components/global/${inputObject.name}/index.html`,
        title: inputObject.title,
        chunks: inputObject.chunks
      }
    };
  console.log(pages);
}