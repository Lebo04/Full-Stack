import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// import Vue from 'vue'
// import VueRouter from 'vue-router'
  
// import App from '../App.vue'
import Create from '../components/AddProduct.vue'
import Edit from '../components/EditProduct.vue'
import Index from '../components/productList.vue'

// Vue.use(VueRouter)
  
// Vue.config.productionTip = false

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // {
  //   path: '/products',
  //   name: 'products',
  //   component: () => import('../views/ProductsView.vue')
  // },
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
]

// const router = new VueRouter({ mode: 'history', routes: routes })
  
// new Vue({
//   // init router
//   router,
//   render: h => h(App),
// }).$mount('#app')

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
