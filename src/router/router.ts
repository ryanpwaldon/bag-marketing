import Home from '../views/Home/Home.vue'
import Demo from '../views/Demo/Demo.vue'
import CatchAll from '../views/CatchAll/CatchAll.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/:affiliateCode/:path(.*)*',
    component: CatchAll
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
