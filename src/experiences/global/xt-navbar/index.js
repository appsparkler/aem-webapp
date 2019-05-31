import $ from 'jquery';
import Vue from 'vue';
//
import {initialize_VueApps, VueAEMComponent} from 'common-script';
import {generate_buttonComponent} from 'vue-components/global/button';
import {generate_imageLinkComponent} from 'aem-components/global/image-link';

setup_XTNavbarComponents();

function setup_XTNavbarComponents() {
    $('[is^=vc-global-button]', '[is^=xt-navbar]').each(generate_imageLinkComponent);
    $('[is^=image-link]', '[is^=xt-navbar]').each(generate_imageLinkComponent);
    $('[is^=xt-navbar]').each(generate_xtNavbarComponent);
}

function generate_xtNavbarComponent() {
    new VueAEMComponent(this, {
      data() {
        return {
          imageLinkConfig: {
            linkClicked() {
              alert('link Clicked passed from parent...');
            }
          }
        }
      }
    });
}
