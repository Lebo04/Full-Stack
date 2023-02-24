import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

// import Vue from "vue";
// import VueRouter from "vue-router";



// Vue.use(VueRouter);

// Vue.config.productionTip = false;

// const routes = [
//   {
//     name: "Create",
//     path: "/create",
//     component: Create,
//   },
//   {
//     name: "Edit",
//     path: "/edit/:id",
//     component: Edit,
//   },
//   {
//     name: "Index",
//     path: "/",
//     component: Index,
//   },
// ];

// const routers = new VueRouter({ mode: "history", routes: routes });

// new Vue({
//   // init router
//   routers,
//   render: (h) => h(App),
// }).$mount("#app");
