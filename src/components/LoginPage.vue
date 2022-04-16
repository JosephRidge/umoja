<template >
  <div
    class="bg-[url('src/assets/images/background-login.svg')] bg-cover h-screen w-screen flex flex-col items-center"
  >
    <div class="rounded-2xl w-96 py-2 px-4 flex flex-col mt-32 items-center mx-auto bg-primaryYellow">
      <div class>
        <img src="../assets/images/Umoja.svg" alt="Community Image " loading="lazy" srcset />
      </div>
    </div>
    <div
      class="container rounded bg-primaryYellow rounded-2xl w-96 border-4 drop-shadow-2xl border-white py-2 px-4 w-min h-min flex flex-col items-center mx-auto"
    >
      <div class="m-2 text-center text-white font-bold text-xl">LOGIN</div>
      <div class="mx-2 my-3">
        <input
          v-model="userEmail"
          type="email"
          placeholder="myemail@email.com"
          class="text-textgray rounded-2xl h-12 w-80 text-center"
        />
      </div>
      <div class="mx-2 my-3">
        <input
          v-model="userPassword"
          type="password"
          placeholder="*******"
          class="rounded-2xl h-12 w-80 text-center text-textgray focus:primaryYellow"
        />
      </div>
      <button
        @click="checkUserRequest"
        class="m-2 bg-white py-2 drop-shadow-xl transition ease-out hover:ease-in hover:drop-shadow-2xl scale-75 hover:scale-100 duration-300 justfy px-8 rounded-3xl font-bold w-40 mx-24 text-darkgray"
      >{{ actionPriorValidation }}</button>
      <button
        class="m-2 transition ease-out scale-75 hover:scale-90 text-xs text-center underline text-darkgray capitalize"
        v-on:click="switchAction"
      >{{ actionNoAccount }}</button>
    </div>
    <!-- Toast message Successful login/SignUp 
    -->
    <div v-if="authUnsuccessful === true"
      :class="'z-400 float-right w-80 mx-60 my-5 shadow items-center transition ease-in-out delay-300 bg-red border-l-4 rounded-2xl border-red-500 text-white'"
      role="alert"
    >
      <p class="font-bold  px-4 py-2 text-center capitalize text-lg">Oops ! Login Failed</p>
      <p class="pt-1 pb-5 px-6 bg-maroon capitalize  rounded-b-lg text-lg  text-center  "> {{errMessage}} </p>
    </div>
    <!-- End of success Toast 
    start of success toast-->
    <div  v-if="authSuccess === true"
      :class="'z-400 float-right w-80 mx-60 shadow items-center transition ease-in-out delay-300 bg-green border-l-4 rounded-2xl border-red-500 text-white p-4'"
      role="alert"
    >
      <p class="font-bold">Success</p>
      <p>Welcome to Umoja where being our brothers keeper is key.</p>
    </div>
    <!-- end of successful toast
    start of successfull REgistration -->
        <div  v-if="authWelcomeSuccess === true"
      :class="'z-400 float-right w-80 mx-60 shadow items-center transition ease-in-out delay-300 bg-blue border-l-4 rounded-2xl border-red-500 text-white p-4'"
      role="alert"
    >
      <p class="font-bold">Success</p>
      <p>Welcome to the Umoja where we leverage the power of many to help people all over Kenya.</p>
    </div>
    <!-- end of successful toast -->
  </div>
</template>

<script>
import { initializeApp } from "firebase/app"; 
import { useLoginStore } from '../store/useLoginCredential';
import router from "../router/index.js"; 
import defaultMixins  from "../mixins/defaultMixins"; 
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  setup() {
    const userLoginStore = useLoginStore()
    return { userLoginStore }
  },
  data() {
    return {
      userEmail: "",
      userPassword: "",
      actionPriorValidation: "Login",
      actionNoAccount: "No Account ? Sign Up",
      action: 0,
      feedBackAfterAut: false,
      authUnsuccessful:false,
      authSuccess:false,
      authWelcomeSuccess:false,
      errMessage:""
    };
  },
  mounted() { },
  mixins:[defaultMixins],
  methods: {
    /*validateUser(auth) {
      let email = this.userEmail;
      let password = this.userPassword;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("credential = >  ", user.uid);   
          this.authUnsuccessful= false,
          this.authSuccess = true;
          this.authWelcomeSuccess = false
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;

          const errorMessage = error.message;
          this.errMessage =   errorCode
          console.log(
            "errorr === > ",
            errorMessage,
            "error message --- > ",
            errorCode
          );     
          this.authUnsuccessful= true,
          this.authSuccess = false;
          this.authWelcomeSuccess = false
          this.$router.push("/auth");
        });
    },  
    registerNewUser(auth) {
      // console.log("clicked", this.userPassword);
      // console.log("clicked", this.userEmail);
      let email = this.userEmail;
      let password = this.userPassword;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("credential = >  ", user.uid);
          this.authUnsuccessful= false,
          this.authSuccess = false;
          this.authWelcomeSuccess = true
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.errMessage = errorCode
          console.log(
            "errorr === > ",
            errorMessage,
            "error message --- > ",
            errorCode
          );
          this.authUnsuccessful= true,
          this.authSuccess = false;
          this.authWelcomeSuccess = false
        });
    }, */
    switchAction() {
      if (this.action === 0) {
        this.actionPriorValidation = "Register";
        this.actionNoAccount = "back to login ?  ";
        this.action = 1;
      } else {
        this.actionPriorValidation = "Login";
        this.actionNoAccount = "No Account ? Sign Up";
        this.action = 0;
      }
    },
    async checkUserRequest() {
      const firebaseConfig = {
        apiKey: this.apiKey,
        authDomain: this.authDomain,
        projectId: this.projectId,
        storageBucket:this.storageBucket,
        messagingSenderId: this.messagingSenderId,
        appId: this.appId,
        measurementId: this.measurementId
      };
      initializeApp(firebaseConfig);
      console.log(
        " current actiom",
        this.actionPriorValidation,
        "action ",
        this.action
      );
      const auth = getAuth();
      // console.log(this.action, "< ---- action");
      if (this.action === 0) {
        // this.validateUser(auth);
        this.userLoginStore.validateUser(auth, this.userEmail, this.userPassword)
        if(this.userLoginStore.navigateToDashboard === true){
          router.push('/dashboard')
        }else{
          router.push('/auth')
        }
      }
      if (this.action === 1) {
        // this.registerNewUser(auth);
        this.userLoginStore.registerNewUser(auth, this.userEmail, this.userPassword)
      } else {
        console.log(" Kindly confirm request once more . . . . .");
      }
    },
  },
};
</script>

<style>
svg {
  overflow-x: hidden;
}
</style>