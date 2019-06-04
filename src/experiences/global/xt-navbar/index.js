import $ from 'jquery';
import Vue from 'vue';
//
import XTNavbarComponentConfig from './vueComponentConfig'
// import {initialize_VueApps, VueAEMComponent} from 'common-script';
global.vueComponents = global.vueComponents || [];
setup_XTNavbarComponents();

console.trace();
function setup_XTNavbarComponents() {
    $('[is^=xt-navbar]').each(generate_xtNavbarComponent);
}

function generate_xtNavbarComponent() {
    // const componentName = $(this).attr('is');
    const XTNavbar = new XTNavbarComponentConfig(this);
    vueComponents.push(XTNavbar.name, XTNavbar.config);
    console.log(XTNavbar.config);
    // console.log(XTNavbar);
    // new VueAEMComponent(this, XTNavbar.config);
}
