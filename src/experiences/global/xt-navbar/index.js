import $ from 'jquery';
import Vue from 'vue';
import Button from 'vue-components/global/button'
import {initialize_VueApps, generate_xtComponent} from 'common-script';
import {generate_imageLinkComponent} from 'aem-components/global/image-link';

setup_XTNavbarComponents();
if(process.env.VUE_APP_IS_DEV) initialize_VueApps();

export function setup_XTNavbarComponents() {
    $('[is^=image-link]', '[is^=xt-navbar]').each(generate_imageLinkComponent);
    $('[is^=xt-navbar]').each(generate_xtNavbarComponent);
}

export function generate_xtNavbarComponent() {
    const vueComponent = {
      data() {
        return {
          imageLinkConfig: {
            linkClicked() {
              alert('link Clicked passed from parent...');
            }
          }
        }
      },
      components: {Button}
    };
    new generate_xtComponent(this, vueComponent);
}
