import Vue from 'vue';

export default function(options) {
    var vue_componentName = this.attributes.is.value;
    var vue_template = this.outerHTML.replace(/is=".*?"/, "").toString(); // avoid "maximum-call-stack-size-exceeded"
    options = options || {};
    options.name = vue_componentName;
    options.template = vue_template;
    console.log(Vue.component(vue_componentName, options));
    // Vue.component(vue_componentName, options);
}
