// styles
import './styles.scss';

// scripts
export default class GlobalXTNavbar {
  constructor(el) {
    const outerHTML = new String(el.outerHTML);
    this.name = el.attributes.is.value;
    this.template = outerHTML.replace(/is=".*?"/, "").toString(); // avoid "maximum-call-stack-size-exceeded caused by cyclical-referrence (i think)"
    // config = config || {};
    // config.template = vue_template;

    // this.name = componentName
  };

  get config() {
    const name = this.name;
    console.trace(this.name);
    return {
      name: this.name,
      template: this.template,
      //
      data(){
        return {
          title: 'Hello...',
          imageLinkConfig: {
            linkClicked() {
              alert('link Clicked passed from parent...');
            }
          }
        }
      },
      //
      methods: {
        linkClicked() {
          alert('link Clicked...')
        }
      }
    }
  }
}
