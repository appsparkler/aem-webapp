import $ from 'jquery'
import ImageLinkComponentConfig from './vueComponentConfig'

global.vueComponents = global.vueComponents || [];
setup_ImageLinkComponents();

export function setup_ImageLinkComponents() {
    $('[is^=image-link]').each(generate_imageLinkComponent);
}

export function generate_imageLinkComponent() {
  vueComponents.push(new ImageLinkComponentConfig(this));
}
