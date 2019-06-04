import $ from 'jquery'
import XTContainerComponentConfig from './vueComponentConfig';

global.vueComponents = global.vueComponents || [];

$('[is^=xt-container]').each(generate_XTContainerComponent);

function generate_XTContainerComponent() {
    vueComponents.push(this, new XTContainerComponentConfig(this));
}
