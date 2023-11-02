<script setup>

</script>
<template>

<div class="greennature-page-title-wrapper header-style-5-title-wrapper">
        <div class="greennature-page-title-overlay"></div>
        <div class="greennature-page-title-container container">
            <h1 class="greennature-page-title">Insert Ewastebin Map Location</h1>
        </div>
    </div>

<div class="with-sidebar-wrapper">
            <div class="with-sidebar-container container">
                <div class="with-sidebar-left eight columns">
                    <div class="with-sidebar-content twelve columns">
                        <section id="content-section-2">
                            <div class="section-container container">
                                <div class="greennature-item greennature-content-item" style="margin-bottom: 60px;"><span class="clear"></span><span class="greennature-space" style="margin-top: -22px; display: block;"></span>
                                    <h5 class="greennature-heading-shortcode " style="font-weight: bold;">Input the Map details below. </h5>
                                    <p> <span class="clear"></span><span class="greennature-space" style="margin-top: 25px; display: block;"></span>
                                        <div role="form" class="wpcf7" id="wpcf7-f4-o1" lang="en-US" dir="ltr">
                                          

                                                <div class="quform-elements">
                                                    <div class="quform-element">
                                                        <p>
                                                            <br>
                                                            <span class="wpcf7-form-control-wrap your-name">
                                                                <input id="name" type="text" v-model="marker.options.title" size="40" class="input1" aria-required="true" aria-invalid="false" placeholder="Title">
                                                            </span> 
                                                        </p>
                                                    </div>
                                                    <div class="quform-element">
                                                        <p>
                                                            <br>
                                                            <span class="wpcf7-form-control-wrap your-email">
                                                                <input id="lat" type="text" v-model="marker.options.position.lat" size="40" class="input1" aria-required="true" aria-invalid="false" placeholder="Latitude">
                                                            </span> 
                                                        </p>
                                                    </div>
                                                    <div class="quform-element">
                                                        <p>
                                                            <br>
                                                            <span class="wpcf7-form-control-wrap your-email">
                                                                <input id="long" type="text" v-model="marker.options.position.long" size="40" class="input1" aria-required="true" aria-invalid="false" placeholder="Longtitude">
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div class="quform-element">
                                                        <p>
                                                            <br>
                                                            <span class="wpcf7-form-control-wrap your-email">
                                                                <input id="long" type="text" v-model="marker.options.locandpos" size="40" class="input1" aria-required="true" aria-invalid="false" placeholder="Place and Postal Code">
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div class="quform-element">
                                                        <p>
                                                            <br>
                                                            <label for="img">Select image: </label>
                                                            <input type="file" id="img" name="img" accept="image/*">
                                                            
                                                        </p>
                                                    </div>



                                                    <p>
                                                        <!-- Begin Submit button -->
                                                        <div class="quform-submit">
                                                            <div class="quform-submit-inner">
                                                                <button @click="savedata" class="submit-button"><span>Send</span></button>
                                                            </div>
                                                            <div class="quform-loading-wrap"><span class="quform-loading"></span></div>
                                                        </div>
                                                    </p>
                                                </div>
                                          
                                        </div>
                                    </p>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </section>
                    </div>

                    <div class="clear"></div>
                </div>
                <!--
                <div class="greennature-sidebar greennature-right-sidebar four columns">
                    <div class="greennature-item-start-content sidebar-right-item">
                        <div id="text-6" class="widget widget_text greennature-item greennature-widget">
                            <h3 class="greennature-widget-title">Before Contacting Us</h3>
                            <div class="clear"></div>
                            <div class="textwidget">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Non equidem invideo, miror magis posuere velit aliquet.</div>
                        </div>
                        <div id="text-7" class="widget widget_text greennature-item greennature-widget">
                            <h3 class="greennature-widget-title">Contact Information</h3>
                            <div class="clear"></div>
                            <div class="textwidget">
                                <p>184 Main Collins Street West Victoria 8007 Australia</p>
                                <p><i class="greennature-icon fa fa-phone" style="vertical-align: middle; color: #444444; font-size: 16px; "></i> 1800-222-222</p>
                                <p><i class="greennature-icon fa fa-envelope" style="vertical-align: middle; color: #444444; font-size: 16px; "></i> contact@yourdomain.com</p>
                                <p><i class="greennature-icon fa fa-clock-o" style="vertical-align: middle; color: #444444; font-size: 16px; "></i> Everyday 9:00-17:00</p>
                            </div>
                        </div>
                        <div id="text-8" class="widget widget_text greennature-item greennature-widget">
                            <h3 class="greennature-widget-title">Social Media</h3>
                            <div class="clear"></div>
                            <div class="textwidget"><a href="#"><i class="greennature-icon fa fa-facebook" style="vertical-align: middle; color: #444444; font-size: 28px; " ></i></a> <a href="#"><i class="greennature-icon fa fa-twitter" style="vertical-align: middle; color: #444444; font-size: 28px; " ></i></a> <a href="#"><i class="greennature-icon fa fa-dribbble" style="vertical-align: middle; color: #444444; font-size: 28px; " ></i></a> <a href="#"><i class="greennature-icon fa fa-pinterest" style="vertical-align: middle; color: #444444; font-size: 28px; " ></i></a> <a href="#"><i class="greennature-icon fa fa-google-plus" style="vertical-align: middle; color: #444444; font-size: 28px; " ></i></a> <a href="#"><i class="greennature-icon fa fa-instagram" style="vertical-align: middle; color: #444444; font-size: 28px; " ></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                -->
                
            </div>
        </div>

</template>
<style scoped>

</style>

<script>
import Ewastebinmarker from '../firebase/Ewastebinmarker.js';
import store from '../store/index.js';
import { GeoPoint } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const storage = getStorage();


export default {
  name: "adminmap",
  data() {
  return {
    marker: {
      options: {
        icon:{
            url: ""
        },
        title: "",
        position: new GeoPoint(0, 0),
        locandpos: ""
      }
    }
  }
},
  mounted() {},
  methods:{

    async savedata() {
  // Get the file input element
  const fileInput = document.getElementById('img');

  // Get the input values
  const title = this.marker.options.title;
  const lat = Number(this.marker.options.position.lat);
  const long = Number(this.marker.options.position.long);
  const locandpos = this.marker.options.locandpos;

  // Check if the title, lat, and long are empty or not numbers respectively
  if (!title || !lat || isNaN(lat) || !locandpos || !long || isNaN(long)) {
    alert("Invalid input");
    return; // Stop execution if there is an error
  }

  // Check if a file is selected
  if (fileInput.files.length === 0) {
    alert("No file selected");
    return; // Stop execution if there is an error
  }

  const file = fileInput.files[0];
  
  // Check if the file type is PNG or JPG
  if (!['image/png', 'image/jpeg'].includes(file.type)) {
    alert("Unsupported file type");
    return; // Stop execution if there is an error
  }

  // Generate a unique ID for the image
  const imageId = `${Date.now()}_${file.name}`;

  const storageRef = ref(storage, 'images/' + imageId);

  try {
    const snapshot = await uploadBytes(storageRef, file);
    // console.log(snapshot.ref);
    
    // Get the download URL for the uploaded image
    const downloadURL = await getDownloadURL(snapshot.ref);
    //console.log("Download URL:", downloadURL);
    
    // Convert latitude and longitude to a GeoPoint object
    var geoPoint = new GeoPoint(lat, long);

    // Update the icon URL in the marker options
    this.marker.options.icon.url = downloadURL;

    var recycleimage = "https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2Frecycle.png?alt=media&token=02d282bf-aa43-45c3-acad-bc16cb29de1f&_gl=1*phgzkx*_ga*OTk4Nzc1NzEzLjE2OTc0NTg5OTQ.*_ga_CW55HF8NVT*MTY5ODk0Mjc2My4zNS4xLjE2OTg5NDI3NzcuNDYuMC4w"

    // Pass the GeoPoint and other marker data directly to addEwastebindata() function
    Ewastebinmarker.addEwastebindata({
      options: {
        recycleimage: recycleimage,
        title: title,
        position: geoPoint,
        icon: {
          url: downloadURL // Update the icon URL from the uploaded image
        },
        locandpos: locandpos

      }
    })
    .then((docId) => {
      //console.log("Data successfully saved with ID:", docId);
      alert("Map added sucessfully!")
      
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });

  } catch (error) {
    console.error("Error uploading image:", error);
  }
}


  }
};


</script>