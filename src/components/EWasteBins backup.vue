<script setup>

</script>


<template>
  <GoogleMap
    api-key="AIzaSyD9NCZ0B4Q6ZmB1Mg2F40jI3JajGBs_o7w"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="12"
  >
    <Marker
      v-for="(marker, index) in markers"
      :key="index"
      :options="marker.options"
      @click="openInfoWindow(marker)"
    >
      <InfoWindow v-if="marker.showInfoWindow" :options="infoWindowOptions">
        <div>
          <h2>{{ marker.options.title }}</h2>
          <img :src="marker.image" alt="Marker Image" class="marker-image">
        </div>
      </InfoWindow>
    </Marker>

    <Polygon v-if="polygonOptions.paths.length" :options="polygonOptions" />
  </GoogleMap>
</template>

<script>
import { defineComponent, ref } from "vue";
import { GoogleMap, Marker, InfoWindow, Polygon } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow, Polygon },
  setup() {
    const center = { lat: 1.3521, lng: 103.8198 };
    const infoWindowOptions = ref({});
    let currentOpenMarker = null;

    const markers = [
      {
        options: {
          position: { lat: 1.3922086984475237, lng: 103.86791049532036 },
          label: "1",
          title: "Seletar",
          icon: {
            url: "../../images/recycle.png",
            scaledSize: { width: 40, height: 40 },
            anchor: { x: 20, y: 20 },
          },
        },
        showInfoWindow: true,
        image: "../../images/ewaste.jpeg"
      },
      {
        options: {
          position: { lat: 1.393184284947774, lng: 103.8958552256329 },
          label: "2",
          title: "Sengkang",
          icon: {
            url: "../../images/recycle.png",
            scaledSize: { width: 40, height: 40 },
            anchor: { x: 20, y: 20 },
          },
        },
        showInfoWindow: true,
        image: "../../images/ewaste2.jpeg"
      },
       
      {
        options: {
          position: { lat: 1.380794863176613, lng: 103.93511332534585 },
          label: "3",
          title: "Pasir Ris",
          icon: {
            url: "../../images/recycle.png",
            scaledSize: { width: 40, height: 40 },
            anchor: { x: 20, y: 20 },
          },
        },
        showInfoWindow: true,
        image: "../../images/pasir_ris.jpg"
      }
    ];
     
    
    const polygonOptions = ref({
      paths: [
        { lat: 1.4448175101549032, lng: 103.76771389484293 },
        { lat: 1.4227659301528146, lng: 103.77406536604894 },
        { lat: 1.43623715409274, lng: 103.82831036337588 },
        { lat: 1.4636083764575156, lng: 103.81028591806154 }
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

    const openInfoWindow = (marker) => {
      closeAllInfoWindows();

      marker.showInfoWindow = true;
      currentOpenMarker = marker;
    };

    const closeAllInfoWindows = () => {
      markers.forEach((marker) => {
        marker.showInfoWindow = false;
        markers.showInfoWindow = false;
      });
      currentOpenMarker = null;
    };

    return { center, markers, openInfoWindow, infoWindowOptions, polygonOptions };
  },
});
</script>





<style scoped>
/* Add your custom styles here */

.marker-image {
  max-width: 50%;
  height: auto;
}
</style>


  
  

  AIzaSyD9NCZ0B4Q6ZmB1Mg2F40jI3JajGBs_o7w


  "../../images/recycle.png"
  image: "../../images/ewaste2.jpeg"
  image: "../../images/ewaste.jpeg"