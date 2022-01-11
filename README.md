# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


# Installing Tailwind CSS  

[Tailwind Installation wuth vue3 and Vite](https://tailwindcss.com/docs/guides/vite) -- >> Might differe at the time if this read ir implmentation 
 
1. Start new project :
```
npm init vite my-project
cd my-project

```
1. Install Tailwind.css :
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

1. In your tailwind.config.js Add : 
```
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

1. Create an index.css in the src directory , then add the following :
 ```
@tailwind base;
@tailwind components;
@tailwind utilities;
 ```
1. Once done import the index.cs file in your  `main.js` file:  

```
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```

1. Now run your app : `npm run dev`

# Installing vue router 
It might change/ be updated by the time your read through this. Kindly read the [docs](https://next.router.vuejs.org/installation.html#npm).

```npm install vue-router@4 --save```

create router instance in main.js file
``` 
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({})
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)
  
  ```