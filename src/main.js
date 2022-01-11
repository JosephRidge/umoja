import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css'
// import { initializeApp } from 'firebase/app'
// import Secrets from './secrets/secrets.js'  

// const firebaseConfig = {
//   apiKey: "AIzaSyDguNf-sooubRJbfMJPsKSE6LTa7mQwMwM",
//   authDomain: "umoja-assist.firebaseapp.com",
//   projectId: "umoja-assist",
//   storageBucket: "umoja-assist.appspot.com",
//   messagingSenderId: "716904160676",
//   appId: "1:716904160676:web:bba0bb7cf2919c3d3e3531",
//   measurementId: "G-9QKKGDBNS9"
// };

// const app = initializeApp(firebaseConfig)
// // initializeApp(Secrets.firebaseConfig);
 
createApp(App).mount('#app')
