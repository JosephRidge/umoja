<template >
  <div
    class="
      bg-[url('src/assets/images/background-login.svg')] bg-cover
      h-screen
      w-screen
    "
  >
    <div class="py-10 text-center text-5xl font-light">Umoja</div>
    <div id="centerSection" class="flex flex-row">
      <div
        id="leftSection"
        class="
          bg-primaryYellow
          text-white
          left-0
          ml-0
          w-96
          h-auto
          py-12
          pl-4
          pr-9
          rounded-br-full rounded-tr-full
          mt-36
        "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        quisquam velit placeat, quo repellendus assumenda excepturi distinctio
        ab error blanditiis minus libero nesciunt eius culpa veritatis obcaecati
        inventore quae consectetur.
      </div>
      <div
        id="rightServiceSection"
        class="bg-white rounded-xl drop-shadow-2xl flex flex-col w-auto"
      >
        <div class="text-darkgray text-2xl font-semibold text-center p-4">
          Getting Started
        </div>
        <div class="flex flex-row p-4 text-xs">
          <div
            class="
              capitalize
              rounded-3xl
              border border-2 border-primaryYellow
              flex
              m-2
              px-4
              py-4
              drop-shadow-2xl
              h-52
              w-44
              text-center
            "
          >
            1. Join the Comminity
          </div>
          <div
            class="
              capitalize
              rounded-3xl
              border border-2 border-primaryYellow
              m-2
              p-4 
              drop-shadow-2xl
              h-52
              w-44
               text-center
               font-light
            "
          >
            2. Go to Our dashboard
          </div>
          <div
            class="
              capitalize
              rounded-3xl
              border border-2 border-primaryYellow
              m-2
              p-4
              drop-shadow-2xl
              h-52
              w-44
              text-center
            "
          >
            3. Request for help
          </div>
          <div
            class="
              capitalize
              rounded-3xl
              border border-2 border-primaryYellow
              m-2
              p-4
              drop-shadow-2xl
              h-52
              w-44
              text-center
            "
          >
            4. Or Be the help
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