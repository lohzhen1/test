<script setup>

</script>
<template>

        <div class="greennature-page-title-wrapper header-style-5-title-wrapper">
            <div class="greennature-page-title-overlay"></div>
            <div class="greennature-page-title-container container">
                <h1 class="greennature-page-title">Image Approval</h1>
             
            </div>
        </div>
        <div class="content-wrapper">
        <div class="greennature-content">
            <div class="container-fluid">
                <!--
                <div class="row mt-4">
                    <div class="col-10" style="text-align: center;">
                        <div class="mb-3">
                            <input type="text" class="form-control" id="search" placeholder="Search for rewards" v-model="searchText" @keyup="search()">
                        </div>
                    </div>
                    <div class="col-2" style="text-align: center;">
                        <button type="button" class="btn btn-save" @click="showNewModal()"><i class="fa fa-plus"></i>Add Rewards</button>
                    </div>
                </div>
                -->
                <hr>
                <div class="row">
                    <div class="col">
                        <table class="table table-striped table-hover table-bordered">
                            <thead class="table-success">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Recycle ID</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Approve</th>
                                    <th scope="col">Decline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(users, index) in userlist" :key="index">
                                    <td><img :src="users.image"></td>
                                    <td>{{ users.recycleId }}</td>
                                    <td>{{ users.username }}</td>
                                    <td>{{ users.userId }}</td>
                   
                               
                                   
                                    <td>
                                        <a class="link-primary" @click="approveImage(users,users.recycleId)">
                                            Approve?
                                        </a>
                                    </td>
                                    <td>
                                        <a class="link-primary" @click="declineImage(users.recycleId)">
                                            Decline?
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>


</template>

<script>
import rewardsTable from '../firebase/rewardsTable';
import usersRewardsTable from '../firebase/usersRewardsTable';
import router from '../router/index.js'
import imagerecycle from '../firebase/imagerecycle.js';
import userTable from '../firebase/userTable.js';
import { doc, updateDoc, setDoc, getDoc, getDocs, collection, where, query, deleteDoc} from 'firebase/firestore'
import { db } from '../firebase/config.js';


export default {

    data(){

        return{
            usersinfo: [],
            userlist: [],
            rewards: [],
            alluser:[],
       
        }

    },

    mounted() {
        imagerecycle.getAllrecycleimage().then(d => {
            this.usersinfo =d;
            //console.log(d); 
            this.userlist=d;
            

        }),

        userTable.getUsers().then(d => {
         this.alluser=d;
         //console.log(d)
            

        })

        

    },

    methods: {
        async approveImage(user, recycleId) {
            const matchedUser = this.alluser.find(u => u.id === user.userId);
            if (matchedUser) {
            matchedUser.currentPoints += 50;
            try {
                const confirmed = window.confirm("Are you sure you want to approve?");

                if (confirmed) {
                await userTable.updateUserPoints(matchedUser.id, matchedUser.currentPoints);
                alert("Points updated successfully, Deleting the fields now");

                // Get all documents that match the userId from recycleImage in Firebase
                const recycleImageRef = doc(db, "recycleimage", recycleId);
      
                await deleteDoc(recycleImageRef);
                //console.log("Document deleted successfully from recycleImage");
          

                // Refresh the page after deleting the documents
                location.reload()
             
                } else {
                console.log("Approval cancelled by user");
                }
            } catch (error) {
                console.error("Error updating user or deleting documents:", error);
            }
        }
    },

    async declineImage(recycleId) {
        try {
          const confirmed = window.confirm("Are you sure you want to decline?");
      
          if (confirmed) {
            const recycleImageRef = doc(db, "recycleimage", recycleId);
      
            await deleteDoc(recycleImageRef);
            console.log("Document deleted successfully from recycleImage");
      
            alert("Recycle image info successfully deleted");
            location.reload()
       
          } else {
            console.log("Decline cancelled by user");
          }
        } catch (error) {
          console.error("Error deleting document:", error);
        }
      }
      
      
    
    
}










}




</script>





<style scoped>
table,
tr,
th {
    color: black;
    font-weight: bold;
}

.table {
    justify-content: center;
    margin-top: 20px;
}

.content-wrapper {
    height: min-content;
    overflow-y: scroll;
}

img {
    height: 100px;
    width: 100px;
    object-fit: contain;
}

td {
    vertical-align: middle;
}

.modal{
    position: fixed;
    margin: 0 auto;
    top: 10%;
    display: block;
    visibility: inherit;
    overflow: auto; /* Enable scroll if needed */


}
.modal-content {
    overflow: scroll !important;
    max-height: 600px !important;
}
.divContainer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 200;
    visibility: hidden;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.open{
    visibility: visible;

}
.openNew{
    visibility: visible;

}
a.link-primary:hover {
    cursor: pointer; 
}

textarea {
    color: #797979;
}
textarea {
    background-color: #f5f5f5;
}
textarea {
    border: 0px;
    outline: none;
    padding: 6px;
    max-width: 100%;
}

.btn-save {
    background-color: rgba(37, 53, 38);
    color: white;
}

.btn-upload {
    background-color: #90ba92;
    color: white;
}

input[type=file]::file-selector-button {
    border: none;
    background-color: #90ba92;
    color: white;
    padding: 0.25rem 0.5rem;
    font-size: .875rem;
    border-radius: 0.2rem;
}

input[type=file]::file-selector-button:hover { 
    cursor: pointer;
}
</style>