// styles
import './styles.scss';

// scripts
export default class {
  config = {}

  constructor(el) {
    const outerHTML = new String(el.outerHTML);
    this.config.name = el.attributes.is.value;
    this.config.template = outerHTML.replace(/is=".*?"/, "").toString();
  }
}
