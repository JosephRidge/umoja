import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css' 
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import AlertPage from './components'

const routes = [
    { path: '/', component: LoginPage },
    { path: '/home', component: HomePage },
    { path: '/dashboard', component: AlertPage },
  ]
  
  
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  })
      
  
createApp(App).use(router).mount('#app')
