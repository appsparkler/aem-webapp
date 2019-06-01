import $ from 'jquery'
import { VueAEMComponent} from 'common-script'

setup_ImageLinkComponents();

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
