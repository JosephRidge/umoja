<template >
  <div
    class="
      bg-[url('src/assets/images/background-login.svg')] bg-cover
      h-screen
      w-screen
      flex
      items-center
    "
  >
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
          class="rounded-2xl h-12 w-80 text-center text-textgray"
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
        "
        v-on:click="switchAction"
      >
        No Account ? Sign Up
      </button>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",
      actionPriorValidation: "Login",
      action: 0
    };
  },
  mounted() {},
  methods: {
    validateUser(auth) {
      let email = this.userEmail;
      console.log("email, ", email);
      this.actionProirValidation = "Login";
      this.action = 0 
    },
    registerNewUser(auth) {
      console.log("clicked", this.userPassword);
      console.log("clicked", this.userEmail);
      let email = this.userEmail;
      let password = this.userPassword;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
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
    switchAction(){
      this.actionPriorValidation = "Register"
      this.action = 1
    },
    checkUserRequest() {
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
      // initializeApp(Secrets.firebaseConfig);
      console.log(" current actiom" , this.actionPriorValidation,  "action ",this.action)
      const auth = getAuth(); 
      console.log(typeof(this.actionProirValidation)) 
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