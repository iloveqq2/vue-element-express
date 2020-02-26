import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/articles/index',
  },
  {
    path: '/articles/create',
    name: 'create',
    component: () => import( '../views/articles/create.vue')
  },
  {
    path: '/articles/:id/edit',
    name: 'edit',
    component: () => import( '../views/articles/edit.vue')
  },
  {
    path: '/articles/index',
    name: 'posts',
    component: () => import( '../views/articles/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
