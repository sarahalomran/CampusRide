import { createRouter, createWebHistory } from 'vue-router'

// استدعاء الصفحات
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue' // مثال لصفحة رئيسية بعد تسجيل الدخول

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router