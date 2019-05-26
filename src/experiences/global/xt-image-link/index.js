import $ from 'jquery'
import { generate_xtComponent, initialize_VueApps } from 'common-script'

// XT IMAGE LINK COMPONENTS
// setup_XTImageLinkComponents();
// if(process.env.VUE_APP_IS_DEV) initialize_VueApps();

export function setup_XTImageLinkComponents() {
    $('[is^=xt-image-link]').each(generate_xtImageLinkComponent);
}

export function generate_xtImageLinkComponent() {
    var componentOptions = {
        methods: {
            XTImageLinkClicked: function() {
                alert('hey...Wassup?');
            }
        },
        mounted() {}
    };
    generate_xtComponent.call(this, componentOptions);
}
