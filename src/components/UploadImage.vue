<script setup>

</script>
<template>

        <div class="greennature-page-title-wrapper header-style-5-title-wrapper">
            <div class="greennature-page-title-overlay"></div>
            <div class="greennature-page-title-container container">
                <h1 class="greennature-page-title">Upload Image</h1>
         
            </div>
        </div>
        <article id="main-content" role="main">  
    <section class="container">
       <div class="row">
         
      <div class="col-md-8">
       
        <hr>
      
      
        <!--image file upoad sample-->
        <div class="box">
  <!-- fileuploader view component -->
  <form action="#" method="post" class="text-center">
    <div class="margin-bottom-20">
      <img class="thumbnail box-center margin-top-20" alt="No image" :src="imageUrl" />
    </div>
    <!--
    <p>
      <button type="submit" class="btn btn-sm" name="delete">
        <i class="icon-remove"></i> Remove
      </button>
      <button type="submit" class="btn btn-primary btn-sm" id="save" name="save">
        <i class="icon-ok icon-white"></i> Save
      </button>
    </p>
    -->
  </form>
  <!-- ./fileuploader view component -->
  <div class="row">
    <div class="col-sm-10">
      <span class="control-fileupload">
        <label for="file1" class="text-left">{{ fileLabel }}</label>
        <input type="file" id="file1" @change="handleFileUpload" ref="fileInput" />
      </span>
    </div>
    <div class="col-sm-2">
      <button type="button" class="btn btn-primary btn-block" @click="uploadFile">
        <i class="icon-upload icon-white"></i> Upload
      </button>
    </div>
  </div>
</div>

     
      </div>
    </div>
  </section>
</article>
</template>

<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import userTable from '../firebase/userTable.js'
import store from '../store/index.js'
import imagerecycle from '../firebase/imagerecycle.js'
export default {
  data() {
    return {
      imageUrl: 'http://www.washaweb.com/tutoriaux/fileupload/imgs/image-temp-220.png',
      selectedFile: null,
      selectedFileName: null,
      fileLabel: 'Please choose a file on your computer.',
      profileData: "",
      image: "",
      username : "",
      userId: "",
      currentPoints: 0

    };
  },
  methods: {
    handleFileUpload(event) {
  const file = event.target.files[0];
  const allowedFormats = ["image/jpeg", "image/png"];

  // Check if selected file is in JPEG or PNG format
  if (file && allowedFormats.includes(file.type)) {
    this.selectedFile = file;
    this.selectedFileName = file.name;
    this.fileLabel = file.name;

    // Display the selected image in the image box
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  } else {
    // Reset the selected file and show an error message
    this.selectedFile = null;
    this.selectedFileName = null;
    this.fileLabel = 'No file chosen';
    this.imageUrl = 'http://www.washaweb.com/tutoriaux/fileupload/imgs/image-temp-220.png';

    // Show an error message to the user
    alert('Invalid file format. Please choose a file in JPEG or PNG format.');
  }
}
,
   
   
    uploadFile() {
  if (this.selectedFile) {

    const userId = store.getters.user.data.uid; 

    userTable.getSingleProfileData(userId).then((data) => {
      this.profileData = data;
      //console.log(data)
      const fullname = this.profileData.fname;
      const cp = this.profileData.currentPoints

      const storage = getStorage();
      const storageRef = ref(storage, 'image/' + this.selectedFileName);
      uploadBytes(storageRef, this.selectedFile).then(() => {
        getDownloadURL(storageRef).then((downloadURL) => {
          // Call the addrecycleimage function with the required data
          const firebaseData = {
            image: downloadURL,
            username: fullname,
            userId: userId,
           // currentPoints:cp
          };

          imagerecycle.addrecycleimage(firebaseData).then((docId) => {
            if (docId) {
              //console.log('Data saved successfully');
              // Additional logic after saving the data, if needed
              alert("You have successfully uploaded the picture! Please wait for our admin staff to check and approve the picture!")
              location.reload();
            } else {
              console.error('Error saving data');
            }
          }).catch((error) => {
            console.error('Error saving data:', error);
          });
        }).catch((error) => {
          console.error('Error retrieving download URL:', error);
        });
      }).catch((error) => {
        console.error('Error uploading file:', error);
      });
    });

  }
      
      else {
        console.log('No file selected');
      }
    }
  }
};

</script>


<style scoped>
/*basic settings */

a:focus {
	outline: none !important;
	outline-offset: none !important;
}

body {
	background: #f5f6f5;
	color: #333;
}

.thumbnail {
  width: 300px; /* Set the desired width */
  height: 200px; /* Set the desired height */
  object-fit: cover;
}

/* helper classses */

.margin-top-20 {
	margin-top: 20px;
}

.margin-bottom-20 {
	margin-top: 20px;
}

.no-margin {
	margin: 0px;
}

/* box component */

.box {
	border-color: #e6e6e6;
	background: #FFF;
	border-radius: 6px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
	padding: 10px;
	margin-bottom: 40px;
  
}

.box-center {
	margin: 20px auto;
  
}

/* input [type = file]
----------------------------------------------- */

input[type=file] {
	display: block !important;
	right: 1px;
	top: 1px;
	height: 34px;
	opacity: 0;
  width: 100%;
	background: none;
	position: absolute;
  overflow: hidden;
  z-index: 2;
}

.control-fileupload {
	display: block;
	border: 1px solid #d6d7d6;
	background: #FFF;
	border-radius: 4px;
	width: 100%;
	height: 36px;
	line-height: 36px;
	padding: 0px 10px 2px 10px;
  overflow: hidden;
  position: relative;
  
  &:before, input, label {
    cursor: pointer !important;
  }
  /* File upload button */
  &:before {
    /* inherit from boostrap btn styles */
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    text-align: center;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    vertical-align: middle;
    cursor: pointer;
    background-color: #f5f5f5;
    background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
    background-repeat: repeat-x;
    border: 1px solid #cccccc;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border-bottom-color: #b3b3b3;
    border-radius: 4px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: color 0.2s ease;

    /* add more custom styles*/
    content: 'Browse';
    display: block;
    position: absolute;
    z-index: 1;
    top: 2px;
    right: 2px;
    line-height: 20px;
    text-align: center;
  }
  &:hover, &:focus {
    &:before {
      color: #333333;
      background-color: #e6e6e6;
      color: #333333;
      text-decoration: none;
      background-position: 0 -15px;
      transition: background-position 0.2s ease-out;
    }
  }
  
  label {
    line-height: 24px;
    color: #999999;
    font-size: 14px;
    font-weight: normal;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    z-index: 1;
    margin-right: 90px;
    margin-bottom: 0px;
    cursor: text;
  }
}
</style>