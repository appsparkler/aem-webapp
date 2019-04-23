import 'bootstrap\\dist\\css\\bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import 'bootstrap'
//
import "./styles.css";
//
import Vue from 'vue';

$(document).ready(setup_vueComponents);
$(document).ready(move_parsysHelperParbaseElems);

function move_parsysHelperParbaseElems() {
  const $parsysHelper = $('.parsys-helper');
  const $parsysHelperParent =$parsysHelper.parent();
  $('.parsys-helper .cq-Editable-dom:not(.newpar)').remove();
  $parsysHelper.appendTo($parsysHelperParent)
  console.log('items moved and removed...');
}

function setup_vueComponents() {
  $('[data-av-component]').each((idx, el) => {

    const $el = $(el);
    const componentPath = $el.attr('data-av-component');
    const propertiesPath = $el.attr('data-properties-path');

    import( /* webpackMode: "eager" */ `components/${componentPath}`)
    .then(render_VueComponent.bind(null, el, propertiesPath));
  });
}

function render_VueComponent(el, propertiesPath, {default: component}) {
  let properties;
  $.ajax({
    url:propertiesPath,
    async:false,
    success: res => properties = res
  });
  new Vue({
    el,
    render(h) {
      return h(component, {
        props: {
          properties
        }
      })
    }
  })
}
