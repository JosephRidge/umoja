// importing out defineStore() method from pinia
import { definestore } from "pinia";

// the first argument is a unique id of the store across your application
export const useStore = defineStore('userCredentials', {
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

    state:() =>{
        return { 
            userEmail:"",
            userAuthValid:false, 
        };
    },
    actions:{
        setUserEmail(val = "myemail@gmail.com" ){
            this.userEmail = val
        },
        setAuthStatus(val = false ){
            this.userAuthValid = val
        },
        // Authentication
        validateUser(auth, email, password) { 
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>{
              const user = userCredential.user
              console.log("credential = >  ", user.uid)
              router.push('/home')
            })
            .catch((error)=>{
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

        // async waitAndAdd(){
        //     setTimeout(()=>{
        // this.count++
        //     },2000)
        // }
    },
    // computed properties for  our store 
    getters:{
        doubleCount:(state) => state.count*2
    }
})