import Vue from 'vue'
import App from './App'
import Store from "./store";
import Router from "./router";
import { sync } from "vuex-router-sync";

sync(Store, Router)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store: Store,
  router: Router
}).$mount('#app')
