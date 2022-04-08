# What is Umoja ? 

```
Umoja is a Crowd-Sourcing platform that enables users to to call out for help to the closest people, to their vicinity, whom will later on respond by either calling out for help to the repective authorities or going to the victims location and give out physical aid.

```

# Why Umoja ? 
```
With the increase in crime rates and Gender Based Violence , the site aims to reduce turn around time, when it comes to emergency response.

The platform provides a medium to seek assistance in : 

  - Medical

  - Any form of Violence eg GBV, Mugging, Mob-Justice, Kidnapping, Robbery, Arsony, amongst all recorded within the Law and/or anything that goes against humanity.

  - Fire related emergency

  - Car Break-Down services , stuck wherever location .

  

```

# How ?

## First Create Account  :  
```
- Create an account
- Login
 ```

##  If you are in need of help : 
```

- Allow Platform to get your location by accepting the permissions.
- Navigate to "Are you In Danger ?" section
- Click either the red (SUPER URGENT!) or orange button to request.
```

##  If you see someone in need of Help  : 

``` 
Allow Platform to get your location
- Check victims location 

- Tap their marker/ location pin

- tap the Help {victim_names} 

- you will see a green notification card pop up

- click on " Select Emeregency Group to Alert"

- select the respective Emergenecy group needed eg police, fire-fighters, Ambulance etc.

- A pop up form will appear

- Input details of the help needed now click send and the athorities will be alerted.
```

# Value Ad
- Reduce Turn around time to emergency response
- Save more lives
- Understand regions with high emeregencies and understance ways to mitigate or reduce levels



The web version of this platform Uses the following technologies : 
- Firebase RealTime DB 
- Firebase Hosting
- Vue3 + Vite
- TailwindCSS

Common Languages : 
- JavaScript
- HTML
- CSS


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
