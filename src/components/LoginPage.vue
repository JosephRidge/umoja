<template >
  <div
    class="
      bg-[url('src/assets/images/background-login.svg')] bg-cover
      h-screen
      w-screen
      flex flex-col
      items-center
    "
  >
   <div class="  
        rounded-2xl
        w-96 
        py-2
        px-4 
        flex flex-col
        mt-32
        items-center
      mx-auto">

      <div class="">
        <img
          src="src/assets/images/Umoja.svg"
          alt="Community Image "
          loading="lazy"
          srcset=""
        />
      </div>
    </div>
    <div
      class="
        container
        rounded
        bg-primaryYellow
        rounded-2xl
        w-96
        border-4
        drop-shadow-2xl
        border-white
        py-2
        px-4
        w-min
        h-min
        flex flex-col
        items-center
        mx-auto
      "
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
          class="
            rounded-2xl
            h-12
            w-80
            text-center text-textgray
            focus:primaryYellow
          "
        />
      </div>
      <button
        @click="checkUserRequest"
        class="
          m-2
          bg-white
          py-2
          drop-shadow-xl
          transition
          ease-out
          hover:ease-in hover:drop-shadow-2xl
          scale-75
          hover:scale-100
          duration-300
          justfy
          px-8
          rounded-3xl
          font-bold
          w-40
          mx-24
          text-darkgray
        "
      >
        {{ actionPriorValidation }}
      </button>
      <button
        class="
          m-2
          transition
          ease-out
          scale-75
          hover:scale-90
          text-xs text-center
          underline
          text-darkgray
          capitalize
        "
        v-on:click="switchAction"
      >
        {{ actionNoAccount }}
      </button>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",
      actionPriorValidation: "Login",
      actionNoAccount:"No Account ? Sign Up",
      action: 0,
      feedBackAfterAut: false

    };
  },
  mounted() {},
  methods: {
    validateUser(auth) {
      let email = this.userEmail;
      let password = this.userPassword;
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
    registerNewUser(auth) {
      console.log("clicked", this.userPassword);
      console.log("clicked", this.userEmail);
      let email = this.userEmail;
      let password = this.userPassword;
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
        apiKey: "AIzaSyDguNf-sooubRJbfMJPsKSE6LTa7mQwMwM",
        authDomain: "umoja-assist.firebaseapp.com",
        projectId: "umoja-assist",
        storageBucket: "umoja-assist.appspot.com",
        messagingSenderId: "716904160676",
        appId: "1:716904160676:web:bba0bb7cf2919c3d3e3531",
        measurementId: "G-9QKKGDBNS9",
      };

      initializeApp(firebaseConfig);
      console.log(
        " current actiom",
        this.actionPriorValidation,
        "action ",
        this.action
      );
      const auth = getAuth();
      console.log(this.action, "< ---- action");
      if (this.action === 0) {
        this.validateUser(auth);
      }
      if (this.action === 1) {
        this.registerNewUser(auth);
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