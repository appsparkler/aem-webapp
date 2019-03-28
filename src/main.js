import Vue from 'vue';
// import App from './App.vue'
import commonGreeter from 'common-script.js'
import 'bootstrap\\dist\\css\\bootstrap.css'
import 'jquery'
import 'bootstrap'

commonGreeter();

Vue.config.productionTip = false
Vue.config.ignoreElements = ['sly'];

// new Vue({
//     render: h => h(App)
// }).$mount('#app');
