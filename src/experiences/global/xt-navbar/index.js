import Vue from 'vue'
import $ from 'jquery'

initialize_XTNavbarComponents()

function initialize_XTNavbarComponents() {
  var xtNavbarComponent = Vue.component('xt-navbar', {
        template:`<h1>XT Navbar</h1>`,
        data: function() {
            return {
			imageLinkConfig: {
                    greet: 'hi'
                }
            }
        }
    });

    $('[is^=xt-navbar]').each(function(idx, el) {
    	var $navbar = $(el);
        $navbar.find("[is^=xt]").html('');
        var componentTemplate = el.innerHTML;
        var componentName = $navbar.attr('is');
        console.log(componentTemplate);
        var component = Vue.component(componentName, {
            extends: xtNavbarComponent,
            template: componentTemplate
        });
        console.log('navbar-component', component);
    });
}

export default initialize_XTNavbarComponents
