<template>
  <div>
    <l-map
      style="height: 100vh; width: 100vw; overflow: hidden"
      class="relative"
      :zoom="zoom"
      :minZoom="5.5"
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
    
      <l-marker v-for="location in locations" :key="location"
      :lat-lng="location.loc" >
      <l-icon  icon-url="src/assets/images/inaid.png" class="shadow-xl"></l-icon>
      <l-popup class="my-5 w-auto"> 
      
       <div class="font-semibold text-darkBlue  "> Hi, my name is <span class="text-dark-orange"> {{location.username}}
       </span> 
       </div>
       <div class="font-semibold text-darkBlue my-1  "> My Location :  <span class="font-bold text-dark-orange"> {{location.locationdesc}}</span></div>
       <div class="font-bold rounded-xl shadow-xl bg-orange py-1 px-3 capitalize text-xs text-center mb-2">  <span class="text-white"> {{location.emergencydesc}} ! </span>
       
       </div>
           <div> 
          <button
          @click="getHelp(location.locationdesc, location.emergencydesc)"
           class=" text-darkBlue 
            rounded
            font-bold py-1 px-3 mx-2 
            shadow  border hover:border-2 
            border-orange 
            hover:transition
            hover:ease-in-out
            hover:duration-300   
            float-right          
            "> 
            <div class=""> Help {{location.username}}</div>            
          </button> 
         </div>  
         <div class="text-white"> . </div>
        </l-popup>
      </l-marker>  
    <l-marker   :lat-lng="[-1.3071, 36.8155]" >
      <l-icon  icon-url="src/assets/images/me.png" class="shadow-xl"></l-icon>
      <l-popup> This is Me</l-popup>
         </l-marker>
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
     
      <div class="flex flex-col justify-items-stretch overflow-hidden py-12">
       <div class="flex justify-between flex-col">
 
 <details class="
              z-400
              bg-white
              divide-y  
              w-72              
              transition ease-in-out duration-700
              mb-5
              mx-10
            rounded-xl
            hover:transition
            hover:duration-700
            hover:ease-in-out
            hover:border-primaryYellow
            hover:rounded-2xl">
        <summary class="px-4 py-2 font-bold transition ease-in-out duration-700 text-xs text-darkBlue">Number of People Needing Help</summary>
      <div
          class="
            z-400
            divide-y divide-primaryYellow
            border-2 border-white
            px-4
            flex flex-col
            bg-white 
            w-72
            h-28
            p-2
            mb-5
            rounded-xl
            hover:transition
            hover:duration-300 
            hover:ease-in-out  
            capitalize
            text-center
             
          "
        >
          <!-- TODO: remove hiddedb attrib -->
          <span class="text-base text-base font-bold px-2">
           Current Number
          </span>
          <div></div>
          <div class="text-5xl font-bold text-center text-maroon p-5">
            {{ numberOfPeopleInNeed }}
          </div>
        </div>
      </details>
    <details class="
              z-400
              bg-white
              divide-y  
              w-72
              
              transition ease-in-out duration-700
              mb-5
              mx-10
            rounded-xl
            hover:transition
            hover:duration-700
            hover:ease-in-out
            hover:border-primaryYellow
            hover:rounded-2xl">
      <summary class="px-4 py-2 font-bold transition ease-in-out duration-700 text-darkBlue text-xs "> Number of Responses</summary>
        <div
          class="
            z-400
            bg-white
            divide-y divide-primaryYellow
            flex flex-col
            border-2 border-white 
            px-6 
            p-2
            mb-5 
            h-28
            hover:border-2
            rounded-xl
            capitalize
            text-center     
          "
        >
          <!-- TODO: remove hiddedb attribute -->
          <span class="text-base font-bold px-2"> Number of Responses</span>
          <div></div>
          <div class="text-5xl font-bold text-center text-green p-5">
          {{ responses }}
          </div> 
             </div>
             </details>
             
             <details class="
            z-400
            mx-10
            mb-5
            w-72
            p-2
            bg-white
            p-2
            mb-5
            rounded-xl">
               <summary class="font-bold px-2 text-darkBlue"> Are you In Danger ?</summary>
               <div
          class="
            flex flex-col
            border-2 border-white
            pt-3
            px-4
            h-36
            hover:transition
            hover:duration-300  
            capitalize
            text-center
            items-center
             
          "
        >
          <!-- TODO: remove hiddedb attrib -->
          <!-- <span class="font-bold px-2 text-darkBlue"
            >In Danger ? Tap the button to call for help
          </span> -->
          <div></div>
          <button
            class="
              rounded-full
              bg-primaryYellow
              text-white
              w-44
              font-bold
              p-2
              border-2
              m-2
              shadow-xl
              translate-y-1
              hover:transition hover:duration-300 hover:-translate-y-1
            "
            v-on="click"
          >
           Is Someone in Danger ?
          </button>
          <button
            class="
              rounded-full
              bg-red
              text-white
              font-bold
              w-44
              p-2
              border-2
              m-2
              shadow-xl
              hover:transition hover:duration-300 hover:-translate-y-1
            "
          >
            I need Help Now !
          </button>
        </div>
             </details>
                <!-- Public bodies Buttons -->
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
            w-72
            h-auto
            rounded-xl
            hover:border-primaryYellow hover:border-2
            capitalize
          ">
          <div class="text-xs text-darkBlue font-bold px-6 py-2">
            If you are close
            <span class="text-primaryYellow font-bold">Tap Marker</span> to
            <span class="text-primaryYellow">help</span> out a brother/ sister
          </div>
          <!-- Contains  icon images of the police car, ambulance and fire hydren-->
          <div class="bg-lightGray h-3 text-transparent"> </div>
       
       <details class="my-4 content-center px-3" >
         <summary  class="mx-4 text-xs text-darkBlue font-bold "> <span class="text-primaryYellow mr-2">
           Select</span>  Emergency Group to alert</summary> 
         <!-- <div class="text-xs text-darkBlue font-bold px-4 pt-2 flex items-center">
            <span class="text-primaryYellow mr-2">Select </span> the reinforcement
            needed at the emergency site
         </div> -->
       
          <div class="py-2 grid grid-cols-2 text-center ">      
            <button
              class="
                mx-6
                pb-3
                hover:transition
                hover:ease-in-out
                hover:animate-pulse
                hover:translate-x-2
                hover:duration-300
                flex flex-col   
              "
            > 
            <div class="font-bold text-right my-2 " >Police</div>
            <div><img
                src="src/assets/images/policecar.svg"
                alt="police button"
                srcset=""/></div>              
            </button> 
             
            <button
              class="
                mx-3
                pb-3 

                hover:transition
                hover:ease-in-out
                hover:animate-pulse
                hover:translate-x-2
                hover:duration-300
              "
            >

            <div class="font-bold my-2 text-left" >Fire Fighters</div>
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
                hover:transition
                hover:ease-in-out
                hover:animate-pulse
                hover:translate-x-2
                hover:duration-300
              "
            >

            <div class="font-bold text-left w-28 my-2">Ambulance</div>
              <img
                src="src/assets/images/ambulance.svg"
                alt=" ambulance button"
                srcset=""
              />
            </button> 
              <button
              class="
                mx-3 
                my-2
                w-14 
                hover:transition
                hover:ease-in-out
                hover:animate-pulse
                hover:-translate-x-1
                hover:duration-300
              "
            >
            <div class="font-bold w-28 text-left my-2  " >Break Down </div>
            <img
                src="src/assets/images/breakdown.svg"
                alt="Tow Truck"
              class=" "
                srcset=""
              /> 
            </button> 
            </div>
       </details>
                      
        </div>

        </div>
      </div>
      
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker,LPopup,LIcon } from "@vue-leaflet/vue-leaflet";
import TopNavigationBar from "./TopNavigationBar.vue";
import { getDatabase, ref, set,push, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
export default {
  components: {
    LMap,
    LTileLayer,
    TopNavigationBar,
    LMarker,
    LPopup,
    LIcon
  },
  data() {
    return {
      //TODO: Start
      description: "",
      location_coordinate: "",
      exact_location: "",
      user_name: "",
      degree: "",
      locations:[],
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
    getHelp(target_location, emergency){
      console.log("CCCCCcc")
      console.log(" Challenge",target_location,emergency )
    },
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
        user_name: 'Jonna Jina',
        location_lat: 1.3053 , 
        location_lng:36.8247,
        exact_location: 'Nyayo stadium kwa Bridge next to Shell petrol station',
        emergency_description: 'Thugs have just been spotted on the Nyayo staidum com[plex',
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
    getAllData(){
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
      let data
      let emergencyRef = ref(db,'emergencies/')
      // console.log(emergencyRef);
      onValue(emergencyRef, (snapshot)=>{
        data = snapshot.val();
        console.log(" - - > ",typeof(data), "-- >", Object.values(data));
        for(let i = 0; i<Object.values(data).length ; i++){
            let loc = [Object.values(data)[i].location_lat,Object.values(data)[i].location_lng ]
            let emergencydescription = Object.values(data)[i].emergency_description
            let username = Object.values(data)[i].user_name 
            let locationdesc = Object.values(data)[i].exact_location
            let details = {
              'username':username,
              'emergencydesc': emergencydescription,
              'locationdesc':locationdesc,
              'loc':loc,
            }
            console.log("details > ", details)
            // this.locations.push(loc)
             this.locations.push(details)
          }
     })

      

    }
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");
    // And now the Leaflet circleMarker function can be used by the options:
    // this.geojsonOptions.pointToLayer = (feature, latLng) =>
    //   circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
  mounted(){
    this.getAllData();
      }
};
</script>

<style>
</style>