import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recheio',
    name: 'Recheio',
    component: () => import('../views/Felling.vue')
  },
  {
    path: '/massa',
    name: 'Massa',
    component: () => import('../views/Dough.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
