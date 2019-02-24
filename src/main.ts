import store from "@/Modules/Vuex/Vuex";
import Vue from "vue";
import App from "./App.vue";
import router from "./Modules/Router";
import "./Plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
