import $ from 'jquery'
import Vue from 'vue'
import 'bootstrap';
import 'bootstrap\\dist\\css\\bootstrap.css'

export function initialize_VueApps() {
  $('[id^=app]').each(VueApp);
}

export function generate_xtComponent(options) {
    console.log(this)
    var vue_componentName = this.attributes.is.value;
    var vue_template = this.outerHTML.replace(/is=".*?"/, "").toString(); // avoid "maximum-call-stack-size-exceeded"
    options = options || {};
    options.name = vue_componentName;
    options.template = vue_template;
    console.log(vue_template)
    Vue.component(vue_componentName, options);
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
    console.log(VueApp)
}
