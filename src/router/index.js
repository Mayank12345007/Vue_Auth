import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
        path: "/login",
        name: "login_page",
        component: Login,
    },
    {
        path: "/signup",
        name: "Signup_page",
        component: Signup,
    },
  ],
});

export default router;
