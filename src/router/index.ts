import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// Import Register Component From Public
import Register from '@/public/Register.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
