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
  const componentPath = $(el).attr('data-av-component');
  const componentImportPath = `components/${componentPath}`
  import( /* webpackMode: "eager" */ `components/${componentPath}`)
  .then(({default:component}) => {
    console.log($('#vueTemplate', el));
    component.template = $('#vueTemplate', el).html();
    let serverData;
    $.ajax({
      url:'/content/aemarch13/xx/en/20190417_home/jcr:content.infinity.json',
      async:false,
      success: res => serverData = res
    });
    new Vue({
      el,
      comments:true,
      template: component.template,
      data(){
        return {
          properties: serverData.logo
        }
      }
    })
  });
});
