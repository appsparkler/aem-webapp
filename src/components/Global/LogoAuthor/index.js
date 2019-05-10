import Vue from 'vue'
import $ from 'jquery'

const GlobalLogoAuthorComponent = Vue.component(
  'global-logo-author', {
    comments: true,
    template: `
      <a hfref="#" @click="logoAuthorClicked();">
        <img src="https://placehold.it/120x40?text=The%20Component" />
      </a>
    `,
    methods:{
      logoAuthorClicked() {
        alert(`${this.$options.name} clicked...`);
      }
  }
});

$('[is^=global-logo-author]').each(setup_component.bind(this));

function setup_component(idx, el) {
  const componentName = $(el).attr('is');
  const componentTemplate = el.innerHTML;
  console.log(componentTemplate);
  Vue.component(componentName, {
    extends: GlobalLogoAuthorComponent,
    template: componentTemplate
  });
}
