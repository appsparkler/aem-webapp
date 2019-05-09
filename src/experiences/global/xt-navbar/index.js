import Vue from 'vue';
import $ from 'jquery';
import LogoComponent from 'components/global/LogoAuthor';

const $navbars = $('[id^=xt_navbar]');

$navbars.each(function(idx, el) {
    setup_logoComponent.apply(null, arguments);
    var navbarTemplate = get_navbarTemplate.apply(this, arguments);
    new Vue({
      el,
      template: navbarTemplate
    })
});

function setup_logoComponent(idx, el) {
    try {
        const componentTemplate = $('.vue-logo-component', el).get(0).outerHTML;
        new LogoComponent({
          template: componentTemplate
        });
    } catch (e) {
      console.error(e);
    }
}

function get_navbarTemplate(idx, elem) {
  try {
    const navbarTempalte = elem.outerHTML;
    return elem.outerHTML;
  } catch (e) {
      console.log('error in getting navbar-template');
  }
}

function get_vueLogoComponent(idx, elem) {
    try {
      const logoComponentTemplate = $('.vue-logo-component', elem).get(0).outerHTML;
      LogoComponent.template = logoComponentTemplate;
      const vueLogoComponent = Vue.component('logo', LogoComponent);
      return vueLogoComponent;
    } catch (e) {
        console.log('error in get_vueLogoComponent');
    }
}
