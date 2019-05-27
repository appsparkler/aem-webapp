import $ from 'jquery'
import { generate_xtComponent, initialize_VueApps } from 'common-script'

// XT IMAGE LINK COMPONENTS
// setup_ImageLinkComponents();
// if(process.env.VUE_APP_IS_DEV) initialize_VueApps();

export function setup_ImageLinkComponents() {
    $('[is^=image-link]').each(generate_imageLinkComponent);
}

export function generate_imageLinkComponent() {
  const component = {
    methods: {
      imageLinkClicked: function() {
        alert('hey...Wassup?');
      }
    },
    props: ['imageLinkConfig'],
    methods: {
      linkClicked: function() {
        if(this.imageLinkConfig && this.imageLinkConfig.linkClicked)
        this.imageLinkConfig.linkClicked();
      }
    }
  }
    new generate_xtComponent(this, component);
}
