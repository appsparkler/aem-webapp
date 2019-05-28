import $ from 'jquery'
import { VueAEMComponent } from 'common-script'

// XT IMAGE LINK COMPONENTS
// setup_ImageLinkComponents();
// if(process.env.VUE_APP_IS_DEV) initialize_VueApps();

export function setup_ImageLinkComponents() {
    $('[is^=image-link]').each(generate_imageLinkComponent);
}

export function generate_imageLinkComponent() {
  new VueAEMComponent(this, {
    props: ['imageLinkConfig'],
    methods: {
      linkClicked: function() {
        if(this.imageLinkConfig && this.imageLinkConfig.linkClicked)
        this.imageLinkConfig.linkClicked();
      }
    }
  })
}
