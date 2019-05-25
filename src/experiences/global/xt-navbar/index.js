import $ from 'jquery';
import {initialize_VueApps, generate_xtComponent} from 'common-script';

setup_XTNavbarComponents()
initialize_VueApps();

export default function setup_XTNavbarComponents() {
    $('[is^=xt-navbar]').each(generate_xtNavbarComponent);
}

function generate_xtNavbarComponent() {
    const componentOptions = {
      methods: {
          youClicked: () => alert('you clicked...')
      }
    };
    generate_xtComponent.call(this, componentOptions);
}
