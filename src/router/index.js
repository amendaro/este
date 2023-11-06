import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    {
        path: '/tareas-crud',
        name: 'tareas-crud',
        component: () => import(/* webpackChunkName: "about" */ '../views/TareasCrud.vue')
    },
    {
        path: '/ca',
        name: 'ca',
        component: () => import(/* webpackChunkName: "about" */ '../views/ca.vue')
    },
    {
        path: '/api',
        name: 'api',
        component: () => import(/* webpackChunkName: "about" */ '../views/Api.vue')
    },
    {
    path: '/prueba',
    name: 'prueba',
    component: () => import(/* webpackChunkName: "about" */ '../views/prueba.vue')
},
    {
        path: '/carrito',
        name: 'carrito',
        component: () => import(/* webpackChunkName: "about" */ '../views/carrito.vue')

    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes

})

export default router
