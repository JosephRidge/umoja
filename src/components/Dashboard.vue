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
    </l-map>

    <div class="flex flex-col mx-10 p-10 bg-darkBlue  ">
      <div
        class="
          z-400
          bg-primaryYellow
          p-5
          my-16
          w-44
          rounded-xl
          top-0
          w-screen
          absolute
          capitalize
        "
      >
      Number of People Who need help today
      <div>{{ numberOfPeopleInNeed }}</div>
      </div>
      <div
        class="
          z-400
          bg-darkBlue
          p-5
          my-20
          w-44
          rounded-xl
          top-0
          w-screen
          absolute
        "
      >
        Layer 2
      </div>
      <div class="z-400 bg-white p-6 w-44 my-24 rounded-xl top-0 w-screen absolute">
        Layer 2
      </div>
      <div
        class="z-400 bg-darkBlue p-5 w-44 my-28 rounded-xl top-0 w-screen absolute"
      >
        Layer 2
      </div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
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
      icon: L.icon({
        iconUrl: "src/assets/device.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      markerObjects: null,
      numberOfPeopleInNeed:100,
    };
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