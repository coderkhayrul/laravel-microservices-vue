import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// Import Register Component From Public
import Register from '@/public/Register.vue'
import Login from '@/public/Login.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
