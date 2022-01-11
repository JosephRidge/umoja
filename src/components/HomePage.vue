<template >
  <div
    class="
      bg-[url('src/assets/images/background-login.svg')] bg-cover
      h-screen
      w-screen 
      transition ease-in-out duration-1000
    "
  >
    <div class="py-10 flex flex-col items-center w-auto h-auto pt-28  "> <div class=""> <img src="src/assets/images/Umoja.svg" alt="Community Image "  loading="lazy" srcset=""></div>
        </div>
    <div id="centerSection" class="transition ease-in-out delay-150 duration-1000 flex flex-row h-80 "
      >
      <div
        id="leftSection"
        class="
          bg-primaryYellow
          text-white 
          w-96
          h-auto
          py-12
          pl-4
          pr-9
          rounded-br-full rounded-tr-full
          mb-24
          mr-10
        "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        quisquam velit placeat, quo repellendus assumenda excepturi distinctio
        ab error blanditiis minus libero nesciunt eius culpa veritatis obcaecati
        inventore quae consectetur.
      </div>
      <div
        id="rightServiceSection"
        class="bg-white rounded-2xl  shadow-2xl flex flex-col w-max"
      >
        <div class="
              text-darkBlue text-2xl font-medium text-center px-4 py-3 h-auto">
          Getting Started
        </div>
        <div class="flex flex-row px-4 py-2 text-xs">
          <div
            class="
              capitalize
              rounded-2xl
              border border-2 border-primaryYellow
              hover:border-darkBlue
              flex
              mx-2
              px-4
              py-4
              shadow-xl
              hover:-translate-y-3
              hover:transition
              hover:ease-in-out
              hover:shadow-2xl
              hover:duration-300
              h-52
              w-44
              text-center
              text-darkBlue
              font-medium
              flex-col 
              items-center
                
            "
          >
            1. Join the Comminity

            <div class="mt-8"> <img src="src/assets/images/community.svg" alt="Community Image "  loading="lazy" srcset=""></div>
          </div>
          <div
            class=" capitalize
              rounded-2xl
              border border-2 border-primaryYellow
              hover:border-darkBlue
              flex
              mx-2
              px-4
              py-4
              shadow-xl
              hover:shadow-2xl
              hover:-translate-y-3
              hover:transition
              hover:ease-in-out
              hover:shadow-2xl
              hover:duration-300
              h-52
              w-44
              text-center
              text-darkBlue
              font-medium
              flex-col 
              items-center
            "
          >
            2. Go to Our dashboard
             <div class="mt-8 "> <img src="src/assets/images/dashboard.svg" alt="Dashboard Image"  loading="lazy" srcset=""></div>
         
          </div>
          <div
            class=" capitalize
              rounded-2xl
              border border-2 border-primaryYellow
              hover:border-darkBlue
              flex
              mx-2
              px-4
              py-4
              shadow-xl
              hover:-translate-y-3
              hover:transition
              hover:ease-in-out
              hover:shadow-2xl
              hover:duration-300
              h-52
              w-44
              text-center
              text-darkBlue
              font-medium
              flex-col 
              items-center
            "
          >
            3. Request for help
             <div class="mt-8"> <img src="src/assets/images/requesthelp.svg" alt="Person Calling for Help"  loading="lazy" srcset=""></div>
         
          </div>
          <div
            class=" capitalize
              rounded-2xl
              border border-2 border-primaryYellow
              hover:border-darkBlue
              flex
              mx-2
              px-4
              py-4
              shadow-xl
              hover:-translate-y-3
              hover:transition
              hover:ease-in-out
              hover:duration-300
              hover:shadow-2xl
              h-52
              w-44
              text-center
              text-darkBlue
              font-medium
              flex-col 
              items-center
            "
          >
            4. Or Be the help
            <div class="mt-9"> <img src="src/assets/images/runnhelp.svg" alt=""  loading="lazy" srcset=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
svg {
  overflow-x: hidden;
}
</style>