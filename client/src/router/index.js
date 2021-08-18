import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CountryEntered from "../views/CountryEntered.vue";

const routes = [
  {
    path: "/",
    name: "PickACountry",
    component: Home,
  },
  {
    path: "/country/:countryName",
    name: "CountryEntered",
    component: CountryEntered,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
