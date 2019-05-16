import 'bootstrap\\dist\\css\\bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import 'bootstrap'
//
import Vue from 'vue';

// experimental
import initialize_xtNavbar from 'experiences/global/xt-navbar/index.js';
import initialize_xtImageLink from 'experiences/global/xt-image-link/index.js'

configure_Vue();
initialize_app();

function configure_Vue() {
  Vue.config.ignoredElements = ['cq', 'sly'];
  Vue.config.comments = true;
}

function initialize_app() {
  initialize_xtImageLink();
  initialize_xtNavbar();
    //
    var $app = $('#app');
    var $xtComponents = $app.find('[is^=xt]');
    $xtComponents.html('');
    var appTemplate = $app.get(0).outerHTML;
    console.log('appTemplate', appTemplate)
    new Vue({
        el: '#app',
        template: appTemplate,
        mounted: function() {
			console.log('app is mounted');
        },
        comments: true
    });
}

export default initialize_app
