<template >
  <div class="bg-[url('src/assets/images/background-login.svg')] bg-cover h-screen w-screen flex items-center">
 
<div class="container rounded bg-primaryYellow rounded-2xl w-96
border-4 drop-shadow-2xl border-white py-2 px-4 
w-min h-min flex flex-col  items-center
mx-auto
 "> 
  <div class="m-2 text-center text-white font-bold text-xl"> LOGIN </div>
  <div class="mx-2 my-3"><input v-model="userEmail" type="email" placeholder="myemail@email.com" class="text-textgray rounded-2xl h-12 w-80 text-center" ></div>
  <div class="mx-2 my-3"><input  v-model="userPassword" type="password" placeholder="*******"  class="rounded-2xl h-12 w-80 text-center text-textgray "></div>
  <button @click="register" class="m-2 bg-white py-2 drop-shadow-xl transition 
  ease-out hover:ease-in hover:drop-shadow-2xl scale-75
   hover:scale-100 duration-300 justfy px-8 rounded-3xl 
   font-bold w-40 mx-24 text-darkgray"> {{ actionPriorValidation }}</button>
  <button class="m-2  transition ease-out scale-75 hover:scale-90 text-xs text-center underline text-darkgray" 
v-on:click='registerNewUser' 
  > No Account ? Sign Up</button>
</div>
   </div>
</template>

<script>
// import firebase from 'firebase'
export default {
  data(){
    return{
      userEmail:'',
      userPassword:'',
      actionPriorValidation:'Login'
    }
  }, 
  mounted(){

  }, 
  methods:{
    validateUser(){
     let email  =  this.userEmail;
     console.log("email, ",email) 
    this.actionProirValidation = "Login"
    },
   registerNewUser(){
   this.actionPriorValidation = "Register" 
   console.log("clicked", this.userPassword) 
   console.log("clicked", this.userEmail) 
   } 
  }
  
}
</script>

<style>
svg{ 
  overflow-x : hidden; 
}
</style>