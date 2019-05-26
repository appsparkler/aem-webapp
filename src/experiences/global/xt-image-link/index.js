import $ from 'jquery'
import { generate_xtComponent, initialize_VueApps } from 'common-script'

// XT IMAGE LINK COMPONENTS
// setup_XTImageLinkComponents();
// if(process.env.VUE_APP_IS_DEV) initialize_VueApps();

export function setup_XTImageLinkComponents() {
    $('[is^=xt-image-link]').each(generate_xtImageLinkComponent);
}

export function generate_xtImageLinkComponent() {
  const component = {
    methods: {
      XTImageLinkClicked: function() {
        alert('hey...Wassup?');
      }
    },
    props: ['xtImageLinkConfig'],
    methods: {
      linkClicked: function() {
        if(this.xtImageLinkConfig && this.xtImageLinkConfig.linkClicked)
        this.xtImageLinkConfig.linkClicked();
      }
    }
  }
    new generate_xtComponent(this, component);
}
