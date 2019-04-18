import 'bootstrap\\dist\\css\\bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import 'bootstrap'
//
import "./styles.css";
//
import Vue from 'vue';
Vue.config.ignoredElements=['sly']

$('[data-av-component]').each((idx, el) => {
  console.log($(el).clone());
  const componentPath = $(el).attr('data-av-component');
  const componentImportPath = `components/${componentPath}`
  import( /* webpackMode: "eager" */ `components/${componentPath}`)
  .then(({default:component}) => {
    new Vue({
      el,
      render(h) {
        return h(component, {
          props: {
            properties:{
              alt: "The Logo",
              href: "/content/aemarch13/xx/en/20190417_home",
              imgSrc: "/content/dam/kpmg/xx/images/2018/07/kpmg-logo.jpg"
            }
          }
        });
      }
    })
  });
});
