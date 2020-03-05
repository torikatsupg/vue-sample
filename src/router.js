import VueRouter from "vue-router";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Vue from "vue";
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: "/first",
      name: "first",
      component: First
    },
    {
      path: "/second",
      name: "second",
      component: Second
    },
    {
      path: "/third",
      name: "third",
      component: Third
    }
  ]
})

export default router