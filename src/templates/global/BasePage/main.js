import 'bootstrap\\dist\\css\\bootstrap.css'
import $ from 'jquery'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
//
import Vue from 'vue';
import LogoAuthor from "components/global/LogoAuthor/index.vue";


$('[class^=vue-component-]').each((idx, el) => {
    console.log(LogoAuthor);
    LogoAuthor.data = function() {
      return {
        greeting: 'hello'
      }
    };
    new Vue({
      // components:{LogoAuthor},
      el,
      // template: `<LogoAuthor />`,
      // data() {
      //   return {
      //     greeting: 'Hello!'
      //   }
      // },
      render(h) {
        return h(LogoAuthor);
      }
    })
});
