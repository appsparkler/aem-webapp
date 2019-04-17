import LogoAuthor from "./component.vue";

import Vue from 'vue';
Vue.config.ignoredElements = ['sly'];
new Vue({
  el: '[data-vue-component]',
  // template: '<h1>Hello World...</h1>',
  components: {LogoAuthor},
  data() {
    return {
      title: 'Hello World...'
    }
  },
  render(h) {
    return h(LogoAuthor);
  }
});
// export default LogoAuthor;
