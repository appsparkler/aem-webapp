import Vue from 'vue';
import $ from 'jquery';

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
    Vue.component(vue_componentName, options);
}

function VueApp() {
    Vue.config.comments = true;
    Vue.config.ignoredElements = ['cq', 'sly'];
    Vue.config.warnHandler = function(msg, vm, trace) {
        console.log(msg);
    };
    Vue.config.productionTip = false;
    this.VueApp = new Vue({
        el: this,
        template: this.outerHTML
    });
}
