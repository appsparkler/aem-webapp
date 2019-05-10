import Vue from 'vue'
import $ from 'jquery'
// export default class LogoComponent {
//   constructor(config) {
//     Vue.component('logo', {
//       template:config.template,
//       methods: {
//         logoClicked() {
//           alert('yay! logo was clicked!!!')
//         }
//       }
//     })
//   }
// }
const GlobalLogoAuthorComponent = Vue.component(
  'global-logo-author', {
    template: `
      <a hfref="#" @click="logoClicked();">
        <img src="https://placehold.it/120x40?text=The%20Component" />
      </a>
    `,
    methods:{
      logoAuthorClicked() {
        alert('yay! logo author was clicked')
      }
  }
});



$('[is^=global-logo-author]').each(setup_component.bind(this));

function setup_component(idx, el) {
  const componentName = $(el).attr('is');
  const componentTemplate = el.innerHTML;
  console.log(componentTemplate);
  Vue.component(componentName, {
    extends: GlobalLogoAuthorComponent,
    template: componentTemplate
  });
}

// export default class {
//   constructor(config) {
//     Vue.component('logo', {
//       template: config.template,
//       methods: {
//         logoClicked() {
//           alert('yay...logo was clicked')
//         }
//       }
//     })
//   }
// }

// export default {
//   // template: `<a href="#" class="navbar-brand" @click="logoClicked();">Navbar</a>`,
//   methods:{
//     logoClicked() {
//       alert('yay! logo clicked')
//     }
//   }
// }
