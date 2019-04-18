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

  console.log();
  const componentPath = $(el).attr('data-av-component');
  const componentImportPath = `components/${componentPath}`
  import( /* webpackMode: "eager" */ `components/${componentPath}`)
  .then(({default:component}) => {
    component.template = $('.vueTemplate', el).get(0).outerHTML;
    // const properties = $(el).attr('data-properties');
    // console.log(eval(properties));
    // console.log($(el));
    let serverData;
    $.ajax({
      url:'/content/aemarch13/xx/en/20190417_home/jcr:content.infinity.json',
      async:false,
      success: res => serverData = res
    });
    // alert(JSON.stringify(serverData.logo));
    new Vue({
      el,
      // props:['properties'],
      comments:true,
      template: component.template,
      data(){
        return {
          properties: serverData.logo
        }
      },
      mounted(){
        // alert('mounted...')
      },
      // render(h) {
      //   return h(component, {
      //     props: {
      //       properties:{
      //         alt: "The Logo",
      //         href: "/content/aemarch13/xx/en/20190417_home",
      //         imgSrc: "/content/dam/kpmg/xx/images/2018/07/kpmg-logo.jpg"
      //       }
      //     }
      //   });
      // }
    })
  });
});
