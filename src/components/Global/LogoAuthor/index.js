import LogoAuthor from "./index.vue";
import Vue from 'vue';
export default LogoAuthor;

Vue.config.ignoredElements = ['sly'];
//
// new Vue({
//   el: "#test",
//   components: { LogoAuthor },
//   render(h){
//     return h(LogoAuthor, {
//       props: {
//         properties:{
//           alt: "The Logo",
//           href: "/content/aemarch13/xx/en/20190417_home",
//           imgSrc: "/content/dam/kpmg/xx/images/2018/07/kpmg-logo.jpg"
//         }
//       }
//     })
//   }
// });
