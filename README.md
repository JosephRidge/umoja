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

# Adding LeafltJS
The implementation maybe updated overtime hence the commands used here ay not work at the time of your follow through hence kinldy check out the [Docs for vue-leaflet](https://github.com/vue-leaflet/vue-leaflet).

On terminal run :  
`npm i -D @vue-leaflet/vue-leaflet`
Add the follwing :
- On the index.html : 
```<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>```

- Place this after the leaflet css
``` <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>```  

```

# State Management using Pinia 
For the state management we will use [Pinia](https://vuejs.org/guide/scaling-up/state-management.html#pinia) an optimized vue store.As opposed to vuex due to its optimized mode plus Vuex maintenance has officically been stopped as Vue5 will be fully using [Pinia](https://vuejs.org/guide/scaling-up/state-management.html#pinia). 

## Implementation  : 
npm install pinia 

import { createPinia } from 'pinia'

app.use(createPinia()) pinia 

<!-- It might be a hustle intsalling pinina via aplugin you may be forece to use --force -->

Defining the store : 
A Store is basically defined using the ` defineStore()` method

- We start by creating a Store directory to hold our store. 
- Under the Store directory we create our store js file. 

## State
A state : function that returns the initial state
        - Accessing the state can be done via crating an instance of it in  the component 
        eg const state  = useStore()
                state.count++
        - REsetting the state :  this can be done by using $reset() method, as it will reset to the intial state eg
                state.$reset()      
        - with the setUp() method it makes it easier to work with Options API without using helper functions
        - in case we are not using the setUp() method and the composition API,and using the computed, methods we ues the mapState() helper function to map state properties as readonly properties
        to be able to write to this states we use mapWritableState() helper  
       -  [Mutating the state](https://pinia.vuejs.org/core-concepts/state.html#mutating-the-state)    
       : we can mutate the state by either  :
        1. ` state.count++` // this referes to the count state thats is incremented
        2. Mutating multiple states we can use the $patch({}) method
                  ``store.$patch({
            counter: store.counter + 1,
            name: 'Abalam',   })``
      - Replacing the state of a whole object : 
          store.$state = { counter: 675, name: 'Paimon' }
             
## Getters  
Receive state as first argument
defined using getters property in the defineState()method
they are similar to `computed properties`, a property that calculates and returns a value, rather than just store it

## Actions
Actions are the equivalent of methods (`objects associated to a vue instance that contain functions defined within them `) in components