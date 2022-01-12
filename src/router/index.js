import { createRouter, createWebHistory } from "vue-router"

import HomePage from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
import AboutUs from '../components/AboutUs.vue'
import Dashboard from '../components/Dashboard.vue'
const routes = [
    { path: '/', component: HomePage },  
    { path: '/auth', component: LoginPage },
    { path: '/home', component: HomePage },
    { path: '/aboutUs', component: AboutUs },
    { path: '/dashboard', component: Dashboard }
  ]
  
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router