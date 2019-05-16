import 'bootstrap\\dist\\css\\bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import $ from 'jquery'
import 'bootstrap'
//
import Vue from 'vue';
configure_Vue();
ininitalize_app();

function configure_Vue() {
  Vue.config.ignoredElements = ['cq', 'sly'];
  Vue.config.comments = true;
}

function initialize_app() {

    var $app = $('#app');
    var $xtComponents = $app.find('[is^=xt]');
    $xtComponents.html('');
    var appTemplate = $app.get(0).outerHTML;
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
