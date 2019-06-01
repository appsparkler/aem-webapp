import $ from 'jquery'
import { VueAEMComponent } from 'common-script'

$('[is^=xt-container]').each(generate_XTContainerComponent);

function generate_XTContainerComponent() {
    new VueAEMComponent(this, {});
}
