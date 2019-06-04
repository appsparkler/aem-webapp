import $ from 'jquery';
import Vue from 'vue';
//
import XTNavbarComponentConfig from './vueComponentConfig'
// import {initialize_VueApps, VueAEMComponent} from 'common-script';
global.vueComponents = global.vueComponents || [];
setup_XTNavbarComponents();

function setup_XTNavbarComponents() {
    $('[is^=xt-navbar]').each(generate_xtNavbarComponent);
}

function generate_xtNavbarComponent() {
    // const componentName = $(this).attr('is');
    const XTNavbar = new XTNavbarComponentConfig(this);
    vueComponents.push(XTNavbar);
    console.log(vueComponents);
    // console.log(XTNavbar);
    // new VueAEMComponent(this, XTNavbar.config);
}
