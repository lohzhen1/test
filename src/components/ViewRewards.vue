<script setup>


</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 col-md-3 col-lg-2" v-for="reward in myRewardsList">
                <div class="card shadow-lg" >
                    <img class="bd-placeholder-img card-img-top img" :src="reward.image" role="img" aria-label="Placeholder: Thumbnail" focusable="false">
                
                    <div class="card-body" style="position: relative;">
                        <p class="card-text" style="padding-bottom: 10px;"> 
                            {{ reward.name }}   <br>
                            Expires: {{ dateFormat(reward.expires) }}
                        </p>
                        <div class="d-flex justify-content-between align-items-center" style="position: absolute; bottom: 0px; padding-bottom: 10px;">
                            <div class="btn-group justify-content-end">
                                <button type="button" class="btn  btn-second" @click="usenow(reward)">Use now</button>                        
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card-text{
    color:black;
}
.card{
    margin-top:10px;
    height:100%;
}

.btn-second {
    background-color: #90ba92;
    color: white;
}

.img {
    width: 100%;
    height:150px;
    
}

.bd-placeholder-img {
    max-height:125px;
    max-width:125px;
    margin:auto;
    padding-top:15px;
    
}
</style>

<script>
import store from '../store/index.js'
import router from '../router/index.js'
import usersRewardsTable from '../firebase/usersRewardsTable';

export default {
    name: "ViewRewardsComponent",
    data() {
        return {
            myRewards: [],
            myRewardsList: [],
            user: JSON.parse(sessionStorage.getItem("user")).data,
        }
    },
    methods: {
        dateFormat(d) {
            var date = new Date(d.toDate());
            date = date.toLocaleDateString();

            return date;
        },
        usenow(reward){
            if(reward.brand == "Earthkeepers"){
                router.push({path: '/cart'})
            }
            else{
                alert("Your code for this voucher is: " + reward.usersRewardsId)
            }
        }
    },
    mounted(){
        usersRewardsTable.getUsersRewards(this.user.uid).then( d => {
            this.myRewards = d;
            this.myRewardsList = d;
        });
    }
};
</script>