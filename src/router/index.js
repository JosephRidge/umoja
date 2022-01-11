import { createRouter, createWebHistory } from "vue-router"

import HomePage from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
const routes = [
    { path: '/', component: LoginPage },
    { path: '/home', component: HomePage },
    // { path: '/dashboard', component: AlertPage },
  ]
  
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router