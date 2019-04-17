import LogoAuthor from "./component.vue";
import Vue from 'vue';
export default LogoAuthor;

Vue.config.ignoredElements = ['sly'];

new Vue({
  el: "#test",
  components: { LogoAuthor },
  render(h){
    return h(LogoAuthor, {
      props: {
        title: 'Hello World...'
      }
    })
  }
});
