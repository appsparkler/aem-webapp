import $ from 'jquery'
import XTComponent from 'common-script'

// XT IMAGE LINK COMPONENTS
setup_XTImageLinkComponents();
initialize_VueApp();

export default function setup_XTImageLinkComponents() {
    $('[is^=xt-image-link]').each(XTImageLinkComponent);
}

function XTImageLinkComponent() {
  alert('setting up...')
    var componentOptions = {
        methods: {
            XTImageLinkClicked: function() {
                alert('hey...Wassup?');
            }
        },
        mounted() {
          alert('mounted');
        }
    };
    XTComponent.call(this, componentOptions);
}

function initialize_VueApp() {
  try {
      
  } catch (e) {

  }
}
