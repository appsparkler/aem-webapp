import $ from 'jquery'
import XTComponent from 'common-script'

// XT IMAGE LINK COMPONENTS
export default function setup_XTImageLinkComponents() {
    $('[is^=xt-image-link]').each(XTImageLinkComponent);
}

function XTImageLinkComponent() {
    var componentOptions = {
        methods: {
            XTImageLinkClicked: function() {
                alert('hey...Wassup?');
            }
        }
    };
    XTComponent.call(this, componentOptions);
}
