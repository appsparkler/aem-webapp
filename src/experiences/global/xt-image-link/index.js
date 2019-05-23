import Vue from 'vue'
import $ from 'jquery'

// initialize_XTImageLinkComponents();

function initialize_XTImageLinkComponents() {
    var xtImageLink = Vue.component('xt-image-link', {
        template:`<a href="#" class="navbar-brand" @clicked="XTImageLinkClicked();">{{ logoText }}</a>`,
        props: [ 'imageLinkConfig' ],
        methods:{
            XTImageLinkClicked: function() {
                console.log(this.$options.name, ' was clicked...');
            }
        },
        data() {
          return {
            // imageLinkConfig:
          };
        }
        comments: true
    });

    $('[is^=xt-image-link]').each(function(idx, el) {
        var componentTemplate = el.innerHTML;
        var $xtImageLink = $(el);
        var componentName = $xtImageLink.attr('is');
        // clear html to avoid vue-warnings
        $xtImageLink.find("[is^=xt-image-link]").html('');
        var component = Vue.component(componentName, {
            extends: xtImageLink,
            template: componentTemplate
        });
        console.log('xt-image-link-component', component);
    });
}

export default initialize_XTImageLinkComponents;
