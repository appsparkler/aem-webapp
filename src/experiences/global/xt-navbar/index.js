import $ from 'jquery';
import Vue from 'vue';
//
import vueComponentConfig from './vueComponentConfig'
import {initialize_VueApps, VueAEMComponent} from 'common-script';

setup_XTNavbarComponents();

function setup_XTNavbarComponents() {
    $('[is^=xt-navbar]').each(generate_xtNavbarComponent);
}

function generate_xtNavbarComponent() {
    new VueAEMComponent(this, vueComponentConfig);
}
