<template >
  <div
    class="
      bg-[url('src/assets/images/background-login.svg')] bg-cover
      h-screen
      w-screen
      transition
      ease-in-out
      duration-1000
      overflow-hidden
    "
  > 
  <div class="right-0"><TopNavigationBar/></div>
    <div class="pt-12 pb-8 flex flex-col items-center w-auto h-auto ">

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
      id="centerSection"
      class="transition ease-in-out delay-150 duration-1000 flex flex-row h-80"
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
          mr-24
          shadow-md
          hover:transition
          hover:duration-700
          hover:font-medium
          hover:ease-in-out
          hover:text-darkBlue
          hover:shadow-xl
        "
      >
       {{ aboutUmoja }}
      </div>
      <div
        id="rightServiceSection"
        class="bg-white rounded-2xl shadow-2xl flex flex-col w-max"
      >
        <div
          class="
            text-darkBlue text-2xl
            font-medium
            text-center
            px-4
            py-3
            h-auto

          "
        >
         Your Journey 
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
              text-center text-darkBlue
              font-medium
              flex-col
              items-center
            "
          >
            1. Join the Comminity

            <div class="mt-8">
              <img
                src="src/assets/images/community.svg"
                alt="Community Image "
                loading="lazy"
                srcset=""
              />
            </div>
          </div>
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
              hover:shadow-2xl
              hover:-translate-y-3
              hover:transition
              hover:ease-in-out
              hover:shadow-2xl
              hover:duration-300
              h-52
              w-44
              text-center text-darkBlue
              font-medium
              flex-col
              items-center
            "
          >
            2. Go to Our dashboard
            <div class="mt-8">
              <img
                src="src/assets/images/dashboard.svg"
                alt="Dashboard Image"
                loading="lazy"
                srcset=""
              />
            </div>
          </div>
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
              text-center text-darkBlue
              font-medium
              flex-col
              items-center
            "
          >
            3. Request for help
            <div class="mt-8">
              <img
                src="src/assets/images/requesthelp.svg"
                alt="Person Calling for Help"
                loading="lazy"
                srcset=""
              />
            </div>
          </div>
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
              hover:duration-300
              hover:shadow-2xl
              h-52
              w-44
              text-center text-darkBlue
              font-medium
              flex-col
              items-center
            "
          >
            4. Or Be the help
            <div class="mt-9">
              <img
                src="src/assets/images/runnhelp.svg"
                alt=""
                loading="lazy"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row mt-10">
      <div
        class="
          text-medium
          rounded-2xl
          border border-lightGray border-2 border-lightGray
          hover:border-darkBlue hover:bg-lightGray hover:ease-in-out
          text-primaryYellow
          hover:text-darkBlue hover:transition hover:duration-300
          text-darkBlue
          capitalize
          flex-col
          mx-10
          py-7
          px-10
          shadow-xl
          items-center
        "
      >
        <span class="text-darkBlue"> Number of Places That Need Help</span>

        <div class="text-center font-bold text-5xl w mx-4 mt-4">
          {{ numOfPeopleInneed }}
        </div>
      </div>
      <div
        class="
          text-medium
          rounded-2xl
          border border-lightGray border-2 border-lightGray
          hover:border-darkBlue hover:bg-lightGray hover:ease-in-out
          text-primaryYellow
          hover:text-darkBlue hover:transition hover:duration-300
          text-darkBlue
          capitalize
          flex-col
          mx-10
          py-7
          px-10
          shadow-xl
          items-center
        "
      >
        <span class="text-darkBlue"> Number of People Dashed to help</span>

        <div class="text-center font-bold text-5xl w mx-4 mt-4">
          {{ numOfPeopleHelping }}
        </div>
      </div>
       <div
        class="
          text-medium
          rounded-2xl
          border border-lightGray border-2 border-lightGray
          hover:border-darkBlue hover:bg-lightGray hover:ease-in-out
          text-primaryYellow
          hover:text-darkBlue hover:transition hover:duration-300
          text-darkBlue
          capitalize
          flex-col
          mx-10
          py-7
          px-10
          shadow-xl
          items-center
        "
      >
        <span class="text-darkBlue"> Number of Emergency Personel Deployed </span>

        <div class="text-center font-bold text-5xl w mx-4 mt-4">
          {{ numOfEmergencyPersonel }}
        </div>
      </div>
    </div>
    <div class="
          bg-primaryYellow
          pl-3
          pt-3
          mt-2
          w-24
          rounded-full
          transition
          duration-1000 
          animate-pulse
          translate-x-3/4   
        ">
      <img
        src="src/assets/images/running man.svg"
        alt=""
        loading="lazy"
        srcset=""
        
      />
    </div>
  </div>
</template>

<script>
import TopNavigationBar from "./TopNavigationBar.vue";
import defaultMixins  from "../mixins/defaultMixins";
export default {
  components:{
TopNavigationBar
  },
  data() {
    return {
      numOfPeopleInneed: 20,
      numOfPeopleHelping: 279,
      numOfEmergencyPersonel:400 
    };
  },
  mounted() {},
  methods: {},
  mixins:[defaultMixins]
};
</script>

<style>
svg {
  overflow-x: hidden;
}
</style>