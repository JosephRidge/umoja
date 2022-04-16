// importing out defineStore() method from pinia
import { defineStore } from "pinia";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";

import router from "../router/index.js";
// the first argument is a unique id of the store across your application
export const useLoginStore = defineStore('userCredentials', {
    // other options...
    /* A state : function that returns the initial state
        - Accessing the state can be done via crating an instance of it in  the component 
        eg const state  = useStore()
                state.count++
        - REsetting the state :  this can be done by using $reset() method, as it will reset to the intial state eg
                state.$reset()      
        - with the setUp() method it makes it easier to work with Options API without using helper functions
        - in case we are not using the setUp() method and the composition API,and using the computed, methods we ues the mapState() helper function to map state properties as readonly properties
        to be able to write to this states we use mapWritableState() helper         
    */

    state: () => {
        return {
            userEmail: "",
            userAuthValid: false,
            remainInLoginPage: false,
            navigateToDashboard: false
        };
    },
    actions: {
        setUserEmail(val = "myemail@gmail.com") {
            this.userEmail = val
        },
        setAuthStatus(val = false) {
            this.userAuthValid = val
        },
        // Authentication
        // Sign In
        validateUser(auth, email, password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log("userDetails  = >  ", user)
                    console.log("userDetails  = >  ", user.uid)
                    this.userEmail = user.email
                    //   this.userAuthValid = true
                    //   console.log("credential = >  ", user.uid)
                    //   console.log( " email = >  ", user.email)
                    //   console.log( " metadata = >  ", user.metadata.createdAt)
                    //   console.log( " LoginVerified ? = >  ", user.emailVerified)
                    this.remainInLoginPage = false
                    this.navigateToDashboard = true
                    //   router.push('/home')
                })
                .catch((error) => {
                    this.remainInLoginPage = true
                    this.navigateToDashboard = false
                    const errorCode = error.code;

                    const errorMessage = error.message;
                    console.log(
                        "errorr === > ",
                        errorMessage,
                        "error message --- > ",
                        errorCode
                    );
                    router.push('/auth')
                });
        },
        // Sign Up
        registerNewUser(auth, email, password) { 
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
              console.log("credential = >  ", user.uid)
                 router.push('/home')
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(
                  "errorr === > ",
                  errorMessage,
                  "error message --- > ",
                  errorCode
                );
              });
          },
        // async waitAndAdd(){
        //     setTimeout(()=>{
        // this.count++
        //     },2000)
        // }
    },
    // computed properties for  our store 
    getters: {
        doubleCount: (state) => state.count * 2
    }
})