// styles
import './styles.scss';

// scripts
export default class GlobalXTNavbar {
  config = {
    data: function() {
      return {
        test: 'Hello...',
        imageLinkConfig: {
          linkClicked() {
            alert('link Clicked passed from parent...');
          }
        }
      };
    },
    //
    methods: {
      linkClicked() {
        alert('link Clicked...')
      }
    }
  }

  constructor(el) {
    const outerHTML = new String(el.outerHTML);
    this.config.name = el.attributes.is.value;
    this.config.template = outerHTML.replace(/is=".*?"/, "").toString();
  }
}
