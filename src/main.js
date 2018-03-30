import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;


// bootstrap vue setup
import BootstrapVue from "bootstrap-vue";
import vSelect from 'vue-select';

Vue.use(BootstrapVue);

Vue.component('v-select', vSelect);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
