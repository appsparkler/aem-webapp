import $ from 'jquery'
import Vue from 'vue'
import 'bootstrap';
import 'bootstrap\\dist\\css\\bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

export function initialize_VueApps() {
  $('[id^=app]').each(VueApp);
}

function VueApp() {
    Vue.config.comments = true;
    Vue.config.ignoredElements = ['cq', 'sly'];
    Vue.config.warnHandler = function(msg, vm, trace) {
        console.log(msg);
    };
    Vue.config.productionTip = false;
    var VueApp = new Vue({
        el: this,
        template: this.outerHTML
    });
}

export class VueAEMComponent {
  constructor(el, config) {
    var vue_componentName = el.attributes.is.value;
    var vue_template = el.outerHTML.replace(/is=".*?"/, "").toString(); // avoid "maximum-call-stack-size-exceeded"
    config = config || {};
    config.name = vue_componentName;
    config.template = vue_template;
    Vue.component(vue_componentName, config);
  }
}
