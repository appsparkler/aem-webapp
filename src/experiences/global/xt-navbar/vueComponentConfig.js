// styles
import './styles.scss';

// scripts
export default class XTNavbarComponentConfig {
  constructor(componentName) {
    this.name = componentName
  };

  get config() {
    return {
      name: this.name,
      data(){
        return {
          title: name,
          imageLinkConfig: {
            linkClicked() {
              alert('link Clicked passed from parent...');
            }
          }
        }
      },
      methods: {
        linkClicked() {
          alert('link Clicked...')
        }
      }
    }
  }
}
