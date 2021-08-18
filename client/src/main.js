import { createStore } from "vuex";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const store = createStore({
  state() {
    return {
      countriesInDatabase: [],
    };
  },
  mutations: {
    fillDatabase(state, payload) {
      state.countriesInDatabase = payload;
    },
  },
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
