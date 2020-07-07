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
    path: '/sabor',
    name: 'Sabor',
    component: () => import('../views/Felling.vue')
  },
  {
    path: '/massa',
    name: 'massa',
    component: () => import('../views/Dough.vue')
  },
  {
    path: '/finish-order',
    name: 'Finish-order',
    component: () => import('../views/FinishOrder.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
