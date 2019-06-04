// styles
import './styles.scss';

// scripts
export default class ImageLinkComponentConfig {
  config = {
    data: function() {
      return {
        test: 'hello...'
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

  constructor(el) {
    const outerHTML = new String(el.outerHTML);
    this.config.name = el.attributes.is.value;
    this.config.template = outerHTML.replace(/is=".*?"/, "").toString();
  }
}
