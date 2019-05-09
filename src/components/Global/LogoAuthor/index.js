import Vue from 'vue'

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

export default class {
  constructor(config) {
    Vue.component('logo', {
      template: config.template,
      methods: {
        logoClicked() {
          alert('yay...logo was clicked')
        }
      }
    })
  }
}

// export default {
//   // template: `<a href="#" class="navbar-brand" @click="logoClicked();">Navbar</a>`,
//   methods:{
//     logoClicked() {
//       alert('yay! logo clicked')
//     }
//   }
// }
