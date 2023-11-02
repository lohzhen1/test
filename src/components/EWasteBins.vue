<script setup>

</script>


<template>
<div class="greennature-page-title-wrapper header-style-5-title-wrapper">
        <div class="greennature-page-title-overlay"></div>
        <div class="greennature-page-title-container container">
            <h1 class="greennature-page-title">E-WasteBin Map</h1>
        </div>
    </div>
<div class="map-container">
  
  <GoogleMap
    api-key="AIzaSyD9NCZ0B4Q6ZmB1Mg2F40jI3JajGBs_o7w"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="12"
  >
  <Marker
  v-for="(ewastebin, index) in ewastebins"
  :key="index"
  :options="{
    position: { lat: parseFloat(ewastebin.position.latitude), lng: parseFloat(ewastebin.position.longitude) },
    label: ewastebin.label,
    title: ewastebin.title,
    icon: {
      //This is the icon image
      url: 'https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2Frecycle.png?alt=media&token=02d282bf-aa43-45c3-acad-bc16cb29de1f&_gl=1*phgzkx*_ga*OTk4Nzc1NzEzLjE2OTc0NTg5OTQ.*_ga_CW55HF8NVT*MTY5ODk0Mjc2My4zNS4xLjE2OTg5NDI3NzcuNDYuMC4w',
      scaledSize: { width: 40, height: 40 },
      anchor: { x: 20, y: 20 },
    },
  }"
  @click="openInfoWindow(ewastebin)"
>
<InfoWindow v-if="selectedEwastebin === ewastebin" :options="infoWindowOptions">
    <div>
      <h5 style="background-color: red; color: white">{{ selectedEwastebin.title }}</h5>
      <p style="color:black">Location: {{ selectedEwastebin.locandpos }}</p>
      <p style="color:black">Location image:</p>
      <img :src="selectedEwastebin.iconUrl" alt="Marker Image" class="marker-image">
     
    </div>
</InfoWindow>

</Marker>


    
  </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import Ewastebinmarker from "../firebase/Ewastebinmarker.js";

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  data() {
    return {
      center: { lat: 1.3521, lng: 103.8198 },
      infoWindowOptions: {},
      selectedEwastebin: null,
      ewastebins: [],
      
    };
  },
  mounted() {
  Ewastebinmarker.getAllEwastebins().then((ewastebins) => {
    this.ewastebins = ewastebins;

    // Convert latitude and longitude to numbers
    this.ewastebins.forEach((ewastebin) => {
      ewastebin.position.lat = parseFloat(ewastebin.position.lat);
      ewastebin.position.lng = parseFloat(ewastebin.position.lng);
    });
  });
},

  methods: {
    openInfoWindow(ewastebin) {
      this.selectedEwastebin = ewastebin;
    },
  },
});
</script>

<style scoped>
/* Add your custom styles here */

.marker-image {
  max-width: 50%;
  height: auto;
}


.map-container {
  position: relative;
  height: 400px; /* Set a fixed height for the map container */
}

.map-container > div {
  position: absolute;
  top: 50%; /* Adjust this value to move the map vertically */
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-50%); /* Centers the map vertically */
}


</style>



  
  

  AIzaSyD9NCZ0B4Q6ZmB1Mg2F40jI3JajGBs_o7w


  "../../images/recycle.png"
  image: "../../images/ewaste2.jpeg"
  image: "../../images/ewaste.jpeg"