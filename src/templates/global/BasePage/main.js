import 'bootstrap\\dist\\css\\bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import 'bootstrap'
//
import "./styles.css";
//
import Vue from 'vue';
Vue.config.ignoredElements=['sly']

$('[data-vue-component]').each((idx, el) => {
  console.log(el);
  const componentPath = $(el).attr('data-vue-component');
  const componentImportPath = `components/${componentPath}`
  // alert(componentImportPath)
  import(`components/${componentPath}`)
  .then(({default:component}) => {
    new Vue({
      el,
      render(h) {
        return h(component, {
          props: {
            title: 'AEM + VUE'
          }
        });
      }
    })
  });
});
