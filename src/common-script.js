import $ from 'jquery'
import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.comments = true;
Vue.config.ignoredElements = ['cq', 'sly'];
Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(msg);
};
Vue.config.productionTip = false;
Vue.config.devTools = true;

global.vueComponents = global.vueComponents || [];

export function initialize_VueApps() {
  $('[id^=app]').each(VueApp);
}

export function initialize_VueComponents() {
  vueComponents.forEach(obj => {
    console.log(obj.config)
    Vue.component(obj.config.name, obj.config);
  });
}

function VueApp() {
    var VueApp = new Vue({
        el: this,
        template: this.outerHTML,
        components: {...vueComponents}
    });
}

export class VueAEMComponent {
  constructor(el, config) {

  }
}
