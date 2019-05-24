import $ from 'jquery';
import XTComponent from 'common-script';

export default function setup_XTNavbarComponents() {
    $('[is^=xt-navbar]').each(XTNavbarComponent);
}

function XTNavbarComponent() {
    XTComponent.call(this);
}
