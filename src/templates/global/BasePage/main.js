import 'bootstrap\\dist\\css\\bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import 'bootstrap'
//
import Vue from 'vue';
//
import setup_XTImageLinkComponents from 'experiences/global/xt-navbar/index.js';
import setup_XTNavbarComponents from 'experiences/global/xt-image-link/index.js'

setup_XTImageLinkComponents()
setup_XTNavbarComponents()
initialize_VueApps()

// VUE APPS
function initialize_VueApps() {
    $('[id^=app]').each(VueApp);
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
