import $ from 'jquery';
import {initialize_VueApps, generate_xtComponent} from 'common-script';
import {generate_xtImageLinkComponent} from 'experiences/global/xt-image-link';

setup_XTNavbarComponents();
initialize_VueApps();

export function setup_XTNavbarComponents() {
    $('[is^=xt-image-link]', '[is^=xt-navbar]').each(generate_xtImageLinkComponent);
    $('[is^=xt-navbar]').each(generate_xtNavbarComponent);
}

export function generate_xtNavbarComponent() {
    const componentOptions = {
      methods: {
          youClicked: () => alert('you clicked...')
      }
    };
    generate_xtComponent.call(this, componentOptions);
}
