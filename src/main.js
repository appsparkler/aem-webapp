// import App from './App.vue'
import commonGreeter from 'common-script.js'
import 'bootstrap\\dist\\css\\bootstrap.css'
import 'jquery'
import 'bootstrap'
import Vue from 'vue';

commonGreeter();

Vue.config.productionTip = false
Vue.config.ignoreElements = ['sly'];

// new Vue({
//     render: h => h(App)
// }).$mount('#app');
