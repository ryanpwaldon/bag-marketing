import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Join from '../views/Join/Join.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/:path(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach(() => {
  setTimeout(window.analytics.page, 5)
})

export default router
