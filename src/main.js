import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css' 
import Router from './router/index.js' 
import { createPinia } from 'pinia'

let app = createApp(App)

app.use(createPinia()) //State Management Vue Store Library 

app.use(Router).mount('#app')
