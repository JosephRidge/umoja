<template>
  <div class="flex flex-row float-right mx-10 mt-5  ">

    <router-link
      to="/home"
      class="
        text-darkBlue
        ml-3
        mr-6 
        hover:transition
        hover:duration-300
        hover:text-semibold
        hover:underline
        hover:underline-offset-8
        hover:pb-2
        hover:text-primaryYellow 
        hover:-translate-y-1
      "
      >Home
    </router-link>
    <router-link
      to="/dashboard"
      class="
        text-darkBlue
        mr-6 
        hover:transition
        hover:duration-300
        hover:text-semibold
        hover:underline
        hover:underline-offset-8
        hover:pb-2
        hover:text-primaryYellow 
        hover:text-semibold
        hover:-translate-y-1
      "
    >
      Dashboard</router-link
    >
    <router-link
      to="/aboutUs"
      class="
        text-darkBlue
        mr-6
        text-semibold
        hover:transition
        hover:duration-300
        hover:text-semibold
        hover:underline
        hover:underline-offset-8
        hover:pb-2
        hover:text-primaryYellow 
        hover:text-semibold
        hover:-translate-y-1
      "
    >
      Why Umoja</router-link
    >
    <router-link
      to="/auth"
      class="
        text-darkBlue
        mr-6
        text-semibold
        hover:transition
        hover:duration-300
        hover:text-semibold
        hover:underline
        hover:underline-offset-8
        hover:pb-2
        hover:text-primaryYellow 
        hover:text-semibold
        hover:-translate-y-1
      "
    >
      Login</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>