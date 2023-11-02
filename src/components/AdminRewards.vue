<script setup>

</script>

<template>
    <div class="greennature-page-title-wrapper header-style-5-title-wrapper">
        <div class="greennature-page-title-overlay"></div>
        <div class="greennature-page-title-container container">
            <h1 class="greennature-page-title">Rewards</h1>
        </div>
    </div>


    <div class="content-wrapper">
        <div class="greennature-content">
            <div class="container-fluid">
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
                <hr>
                <div class="row">
                    <div class="col">
                        <table class="table table-striped table-hover table-bordered">
                            <thead class="table-success">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Rewards Name</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Value (SGD)</th>
                                    <th scope="col">Usage duration</th>
                                    <th scope="col">Min. Spending</th>
                                    <th scope="col">Points required</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(rewards, index) in rewardsList" :key="index">
                                    <td><img :src="rewards.image"></td>
                                    <td>{{ rewards.name }}</td>
                                    <td>{{ rewards.brand }}</td>
                                    <td>{{ rewards.desc }}</td>
                                    <td>{{ rewards.value }}</td>
                                    <td>{{ rewards.duration }}</td>
                                    <td>{{ rewards.minSpending }}</td>
                                    <td>{{ rewards.points }}</td>
                                    <td>{{ rewards.qty }}</td>
                                    <td>
                                        <a class="link-primary" @click="showModal(rewards)">
                                            Edit
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

    <div class="container-fluid divContainer" v-bind:class="{ 'openNew': modalNewVisible }">
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <form @submit.prevent="createReward()">
                <div class="modal-header">
                    <h5 class="modal-title">Create new reward</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeNewModal()"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Reward Name" v-model="newReward.name" required>
                            <label for="name">Reward Name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="brand" placeholder="Reward brand" v-model="newReward.brand" required>
                            <label for="brand">Brand</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="value" placeholder="Value" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            v-model="newReward.value" required>
                            <label for="value">Value</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="qty" placeholder="Quantity" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            v-model="newReward.qty" required>
                            <label for="qty">Quantity</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="minSpending" placeholder="Min. Spending" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            v-model="newReward.minSpending" required>
                            <label for="minSpending">Min. Spending</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="duration" placeholder="Duration" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            v-model="newReward.duration" required>
                            <label for="duration">Duration</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="points" placeholder="Points" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            v-model="newReward.points" required>
                            <label for="points">Points</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <textarea class="form-control" style="height: 100%;" id="desc" placeholder="Reward Description" v-model="newReward.desc" required
                            rows="3"></textarea>
                            <label for="desc">Reward Description</label>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-4" style="text-align: center;">
                            <div id="preview">
                                <img v-if="item.imageUrl" :src="item.imageUrl" />
                            </div>
                            <input type="file" accept="image/*" @change="onChange" id="file" required/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-save" >Create Reward</button>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    
</template>

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
<script>
import rewardsTable from '../firebase/rewardsTable';
import storageFunction from '../firebase/storageFunction';
import router from '../router/index.js'

export default {
    data() {
        return {
            rewards: [],
            rewardsList: [],
            searchText: "",
            item:{
                image : null,
                imageUrl: null
            },
            modalNewVisible: false,
            newReward: {
                name: "",
                brand: "",
                desc: "",
                image: "",
                value: 1,
                duration: 1,
                qty: 1,
                minSpending: 0,
                points: 100
            }
        }
    },
    mounted() {
        rewardsTable.getAllRewards().then(d => {
            this.rewards = d;
            this.rewardsList = d;
        })
    },
    beforeUnmount() {
    },
    methods: {
        search(){
            this.rewardsList = this.rewards.filter(
                (item) => item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
        },
        showModal(product){
            this.productInfo = JSON.parse(JSON.stringify(product));
            this.modalVisible = !this.modalVisible;
        },
        showNewModal(){
            this.modalNewVisible = !this.modalNewVisible;
        },
        closeNewModal(){
            this.modalNewVisible = !this.modalNewVisible;
            this.item.image = null;
            this.item.imageUrl = null;
            this.newReward = {
                name: "",
                brand: "",
                desc: "",
                image: "",
                value: 1,
                duration: 1,
                qty: 1,
                minSpending: 0,
                points: 100
            }
            document.getElementById('file').value = ""
        },
        onChange(e) {
            const file = e.target.files[0]
            this.item.image = file
            this.item.imageUrl = URL.createObjectURL(file)
        },
        createReward(){
            var confirmCreate = confirm("Confirm creation of new reward?");

            if(confirmCreate){
                rewardsTable.addReward(this.newReward).then( d => {
                    if(d){
                        storageFunction.uploadAndSaveImageRewards(this.item.image, this.newReward, d).then( async () => {
                            var that = this;
                            setTimeout(function () {
                                alert("Reward created successfully");
                                that.closeNewModal();
                                router.push({path: '/dashboard'}).then(() => {
                                    router.push({path: '/adminRewards'});
                                })
                            }, 500);

                        })
                    }
                    else {
                        alert("Error: Product not created");
                        this.closeNewModal();
                        router.push({path: '/dashboard'}).then(() => {
                            router.push({path: '/adminRewards'});
                        })
                    }
                })
            }

        }
    }

}   
</script>