<template>
  <div>
    <l-map
      style="height: 100vh; width: 100vw; overflow: hidden"
      class="relative"
      :zoom="zoom"
      :minZoom="6.5"
      :center="centerboundsOfKenya"
      :maxBounds="bounds"
      :options="{ zoomControl: true }"
      bounds="bounds"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <TopNavigationBar
        class="
          z-400
          absolute
          right-0
          bg-white
          px-4
          py-3
          h-12
          m-0
          text-sm
          rounded-xl
          shadow-2xl
          drop-shadow-2xl
          hover:text-primaryYellow
        "
      />
      <div class="flex flex-col overflow-hidden py-12">
        <div
          class="
            z-400
            divide-y divide-primaryYellow
            border-2 border-white
            px-4
            flex flex-col
            bg-white
            mx-10
            w-72
            h-36
            p-2
            mb-5
            rounded-xl
            hover:transition
            hover:duration-300
            hover:-translate-y-2
            hover:ease-in-out
            hover:rounded-2xl
            hover:border-primaryYellow
            hover:border-2
            shadow-xl
            capitalize
            text-center
            hidden
          "
        >
          <!-- TODO: remove hiddedb attrib -->
          <span class="text-base py-1 font-medium px-2">
            People Who need help
          </span>
          <div></div>
          <div class="text-5xl font-bold text-center text-maroon p-5">
            {{ numberOfPeopleInNeed }}
          </div>
        </div>

        <div
          class="
            z-400
            bg-white
            divide-y divide-primaryYellow
            flex flex-col
            border-2 border-white
            shadow-xl
            px-6
            mx-10
            w-72
            h-36
            p-2
            mb-5
            rounded-xl
            shadow-2xl
            hover:transition
            hover:duration-300
            hover:-translate-y-2
            hover:ease-in-out
            hover:rounded-2xl
            hover:border-primaryYellow
            hover:border-2
            capitalize
            text-center
            hidden
          "
        >
          <!-- TODO: remove hiddedb attrib -->
          <span class="text-base font-bold px-2"> Number of Responses</span>
          <div></div>
          <div class="text-5xl font-bold text-center text-green p-5">
            {{ responses }}
          </div>
        </div>
        <div
          class="
            z-400
            flex flex-col
            border-2 border-white
            px-4
            p-2
            bg-white
            mx-10
            mb-5
            w-72
            h-44
            p-2
            mb-5
            rounded-xl
            hover:transition
            hover:duration-300
            hover:ease-in-out
            hover:rounded-2xl
            hover:border-primaryYellow
            hover:border-2
            shadow-xl
            capitalize
            text-center
            items-center
            hidden
          "
        >
          <!-- TODO: remove hiddedb attrib -->
          <span class="font-bold px-2 text-darkBlue"
            >In Danger ? Tap the button to call for help
          </span>
          <div></div>
          <button
            class="
              rounded-full
              bg-primaryYellow
              text-white
              w-48
              font-bold
              p-3
              border-2
              m-2
              shadow-xl
              hover:transition hover:duration-300 hover:-translate-y-1
            "
          >
            Medium Danger
          </button>
          <button
            class="
              rounded-full
              bg-red
              text-white
              font-bold
              w-48
              p-3
              border-2
              m-2
              shadow-xl
              hover:transition hover:duration-300 hover:-translate-y-1
            "
          >
            I need Help Now !
          </button>
        </div>
        <div
          class="
            z-400
            flex flex-col
            border-2 border-primaryYellow
            py-3
            bg-white
            mx-10
            mb-5
            shadow-xl
            w-fit
            h-auto
            rounded-xl
            hover:border-primaryYellow hover:border-2
            capitalize
          "
        >
          <div class="text-xs text-darkBlue font-bold px-6 py-2">
            If you are close
            <span class="text-primaryYellow font-bold">Tap Marker</span> to
            <span class="text-primaryYellow">help</span> out a brother/ sister

            <!-- TODO: Start of trial Data once done  -->
            <div class="mx-2 my-3">
              Coordinates :
              <input
                v-model="location_coordinate"
                placeholder="0.00,0.00"
                class="text-textgray rounded-2xl h-12 w-80 text-center"
              />
            </div>
            <div class="mx-2 my-3">
              Degree :
              <input
                v-model="degree"
                placeholder="medium"
                class="text-textgray rounded-2xl h-12 w-80 text-center"
              />
            </div>
            <div class="mx-2 my-3">
              UserName
              <input
                v-model="user_name"
                placeholder="Mike Mac Mike"
                class="text-textgray rounded-2xl h-12 w-80 text-center"
              />
            </div>
            <div class="mx-2 my-3">
              Location DEtails :
              <input
                v-model="exact_location"
                placeholder="Makadara law courts"
                class="text-textgray rounded-2xl h-12 w-80 text-center"
              />
            </div>
            <div class="mx-2 my-3">
              Tell us More :
              <input
                v-model="description"
                placeholder="lorem lorem wololo"
                class="text-textgray rounded-2xl h-12 w-80 text-center"
              />
            </div>
            <!-- TODO: End of trial Data once done  -->

            <button
              v-on:click="sendEmergencyReq()"
              class="
                py-3
                px-7
                ml-20
                hover:transition
                hover:duration-300
                hover:-translate-y-1
                hover:ease-in-out
                hover:shadow-2xl
                rounded-full
                bg-green
                text-white
                font-bold
              "
            >
              Yes
            </button>
            <button
              class="
                py-3
                px-8
                mx-3
                font-bold
                hover:transition
                hover:duration-300
                hover:-translate-y-1
                hover:ease-in-out
                hover:shadow-2xl
                rounded-full
                bg-red
                text-white
              "
            >
              No
            </button>
          </div>
          <div class="bg-lightGray h-3 text-transparent">.</div>
          <div class="text-xs text-darkBlue font-bold px-4 flex items-center">
            <span class="text-primaryYellow">Select </span> the reinforcement
            needed at the emergency site
            <button
              class="
                mx-6
                pb-3
                hover:transition
                hover:ease-in-out
                hover:animate-pulse
                hover:translate-x-2
                hover:duration-300
              "
            >
              <img
                src="src/assets/images/policecar.svg"
                alt="police button"
                srcset=""
              />
            </button>
            <button
              class="
                mx-3
                pb-3
                hover:transition
                hover:ease-in-out
                hover:animate-pulse
                hover:translate-y-2
                hover:duration-300
              "
            >
              <img
                src="src/assets/images/firefighter.svg"
                alt="firefighter button"
                srcset=""
              />
            </button>
            <button
              class="
                mx-6
                mb-2
                pb-3
                hover:transition
                hover:ease-in-out
                hover:animate-pulse
                hover:translate-x-2
                hover:duration-300
              "
            >
              <img
                src="src/assets/images/ambulance.svg"
                alt=" ambulance button"
                srcset=""
              />
            </button>
          </div>
        </div>
      </div>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import TopNavigationBar from "./TopNavigationBar.vue";
import { getDatabase, ref, set,push } from "firebase/database";
import { initializeApp } from "firebase/app";
export default {
  components: {
    LMap,
    LTileLayer,
    TopNavigationBar,
  },
  data() {
    return {
      //TODO: Start
      description: "",
      location_coordinate: "",
      exact_location: "",
      user_name: "",
      degree: "",
      //TODO : End once done testing
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      markerLatLng: [51.504, -0.159],
      iconWidth: 45,
      iconHeight: 40,
      iconSize: 64,
      center: [-0.023559, 37.906193],
      centerboundsOfKenya: [-0.023559, 37.906193],
      southWestKenya: [-4.8995204, 33.9098987],
      northEastKenya: [4.62, 41.899578],
      bounds: [
        [-4.8995204, 33.9098987],
        [4.62, 41.899578],
      ],
      meIcon: L.icon({
        iconUrl: "src/assets/images/me.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      inaidIcon: L.icon({
        iconUrl: "src/assets/images/inaid.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      helperIcon: L.icon({
        iconUrl: "src/assets/images/helper.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      markerObjects: null,
      numberOfPeopleInNeed: 100,
      responses: 80,
    };
  },
  methods: {
    sendEmergencyReq() {
      // description:"",
      let emergencyDescription = this.description;
      // location_coordinate:"",
      let myLocCoordinates = this.location_coordinate;
      // exact_location:"",
      let exactLocationDesc = this.exact_location;
      // user_name:"",
      let userName = this.user_name;
      // degree:"",
      let issueServerity = this.degree;
     
      // let db = getDatabase(this.initRequest);
      const firebaseConfig = {
        apiKey: "AIzaSyDguNf-sooubRJbfMJPsKSE6LTa7mQwMwM",
        authDomain: "umoja-assist.firebaseapp.com",
        projectId: "umoja-assist",
        storageBucket: "umoja-assist.appspot.com",
        messagingSenderId: "716904160676",
        appId: "1:716904160676:web:bba0bb7cf2919c3d3e3531",
        measurementId: "G-9QKKGDBNS9",
      };
      let app = initializeApp(firebaseConfig);
      let db = getDatabase(app)
      console.log("==>",db)
     push(ref(db,  "emergencies/"), {
        user_name: 'userName',
        location_coords: 'myLocCoordinates',
        exact_location: 'exactLonbmbcationDesc',
        emergency_description: 'emergecxncyDescription',
        button_clicks: 5,
      })
        .then(() => {
          console.log("Successs ");
        })
        .catch((error) => {
          console.log(" Error : " + error);
        });
    },
    initRequest() {
      const firebaseConfig = {
        apiKey: "AIzaSyDguNf-sooubRJbfMJPsKSE6LTa7mQwMwM",
        authDomain: "umoja-assist.firebaseapp.com",
        projectId: "umoja-assist",
        storageBucket: "umoja-assist.appspot.com",
        messagingSenderId: "716904160676",
        appId: "1:716904160676:web:bba0bb7cf2919c3d3e3531",
        measurementId: "G-9QKKGDBNS9",
      };
      let app = initializeApp(firebaseConfig);
      console.log(app)
      return app;
    },
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");
    // And now the Leaflet circleMarker function can be used by the options:
    // this.geojsonOptions.pointToLayer = (feature, latLng) =>
    //   circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
};
</script>

<style>
</style>