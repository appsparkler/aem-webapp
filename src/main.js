import Vue from 'vue'
import App from './App.vue'
import 'bootstrap\\dist\\css\\bootstrap.css'
import 'jquery'
import 'bootstrap'

Vue.config.productionTip = false
Vue.config.ignoreElements = ['sly'];

new Vue({
    render: h => h(App)
}).$mount('#app');
