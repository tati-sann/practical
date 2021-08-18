import Vue from 'vue';
import App from './App.vue';
import { BootstrapVueIcons } from "bootstrap-vue";
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import VueMask from 'v-mask'

Vue.config.productionTip = false;
Vue.use(BootstrapVueIcons);
Vue.use(VueMask);

new Vue({
  render: h => h(App),
}).$mount('#app')
