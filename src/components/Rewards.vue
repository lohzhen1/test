<script setup>
import LoginPopup from '../views/LoginPopup.vue'
import ViewRewards from '../views/ViewRewards.vue';

</script>

<template>
        <div v-if="user.role == 'visitor'" class="bodyDiv">
            <LoginPopup />
        </div>

        <div v-else class="bodyDiv">
        <div v-if="user.tier == 'bronze'" class="greennature-page-title-wrapper header-style-5-title-wrapper bronze_tier">
        <div class="greennature-page-title-overlay"></div>
        <div class="greennature-page-title-container container">
            <h1 class="greennature-page-title">
                <div id = "Account-progress" >
                    <h6>Bronze</h6>
                    <div class="progress" style="height: 40px;">
                    <div class="progress-bar"  role="progressbar" style="background-color:green; width: user.totalPoints" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div id="Cpoints">
                        Current Points: {{user.currentPoints}}
                    </div>
                    <div id="Tpoints">
                        Total Points: {{user.totalPoints}}
                    </div>
                </div>
            </h1>
        </div>
        </div>

        <div v-if="user.tier == 'silver'" class="greennature-page-title-wrapper header-style-5-title-wrapper silver_tier">
        <div class="greennature-page-title-overlay"></div>
        <div class="greennature-page-title-container container">
            <h1 class="greennature-page-title">
                <div>
                    <div id = "Account-progress" >
                        <h6>Silver </h6>
                        <div class="progress" style="height: 40px;">
                        <div class="progress-bar"  role="progressbar" style="background-color:green; width:  user.totalPoints" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    <div id="Cpoints">
                        Current Points: {{user.currentPoints}}
                    </div>
                    <div id="Tpoints">
                        Total Points: {{user.totalPoints}}
                    </div>
                </div>
            </h1>
        </div>
        </div>

        <div v-if="user.tier == 'gold'" class="greennature-page-title-wrapper header-style-5-title-wrapper gold_tier">
        <div class="greennature-page-title-overlay"></div>
        <div class="greennature-page-title-container container">
            <h1 class="greennature-page-title">
                    <div id = "Account-progress" >
                        <h6>gold</h6>
                        <div class="progress" style="height: 40px;">
                        <div class="progress-bar" role="progressbar" style="background-color:green; width:  user.totalPoints" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    <div id="Cpoints">
                        Current Points: {{user.currentPoints}}
                    </div>
                    <div id="Tpoints">
                        Total Points: {{user.totalPoints}}
                </div>
            </h1>
        </div>
        </div>
        
    <div class="row">

        <!-- Tabs for switching between all rewards and user's own rewards -->
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-allRewards-tab" data-bs-toggle="tab" data-bs-target="#nav-allRewards" type="button" role="tab" aria-controls="nav-allRewards" aria-selected="true">Rewards Marketplace</button>
                <button class="nav-link" id="nav-rewards-tab" data-bs-toggle="tab" data-bs-target="#nav-rewards" type="button" role="tab" aria-controls="nav-rewards" aria-selected="false">My Rewards</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <!-- All Rewards -->
            <div class="tab-pane fade show active" id="nav-allRewards" role="tabpanel" aria-labelledby="nav-allRewards-tab">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-4 col-md-3 col-lg-2" v-for="reward in rewardsList"  :key="reward.id">
                            <div class="card shadow-lg">
                            <img class="bd-placeholder-img card-img-top img" width="125px" height="100px" :src="reward.image" role="img" aria-label="Placeholder: Thumbnail" focusable="false">
                            <div class="card-body d-flex flex-column" style="position: relative;">
                                <p class="card-text" style="background-color: rgb(144, 186, 146, 0.6); width: 100%; text-align: center;">
                                    {{ reward.points }} Points
                                </p>
                                <p class="card-text" style="padding-bottom: 10px;">
                                    {{reward.name}} 
                                </p>
                                <div class="d-flex justify-content-between align-items-center" style="position: absolute; bottom: 0px; padding-bottom: 10px;">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-second mt-auto" @click="redeemReward(reward)">Redeem</button>
                                
                                </div>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- User's rewards -->
            <div class="tab-pane fade" id="nav-rewards" role="tabpanel" aria-labelledby="nav-rewards-tab">     
                <ViewRewards />
            </div>
        </div>
    </div>
    


            <!-- </span> -->
        <!-- </div>
    </div> -->

<br>
<br>
</div>


<!-- Voucher cards  -->
</template>

<style scoped>
    .bronze_tier{
        background-color: #CD7F32;
        height: 100px;
    }
    .silver_tier{
        background-color: silver;
        height: 100px;
    }
    .gold_tier{
        background-color:gold;
        height: 100px;
    }
    @media screen and (min-width: 767px) {
  #progress_background {
    margin-top: 150px;
  }
    }
    #progress_background{
        margin-bottom: 150px;
    }

    .account_progress {
        vertical-align: middle;
    }
    .greennature-page-title-wrapper {
        background-image: none;
        position: relative
    }
    .header-style-5-title-wrapper.greennature-page-title-wrapper {
        padding-bottom: 190px;
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
    .bodyDiv{
        min-height: 1000px;
        overflow: auto;
    }
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
    nav{
        margin-top:10px;
    }
    #Cpoints{
        font-size:20px;
        text-align:left;
        margin-top: 5px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color:maroon;
    }
    #Tpoints{
        font-size:20px;
        text-align:left;
        margin-bottom:5px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color:maroon;
    }
</style>

<script>
import rewardsTable from '../firebase/rewardsTable';
import usersRewardsTable from '../firebase/usersRewardsTable';
import router from '../router/index.js'


export default{
    data(){
          return{
                user: JSON.parse(sessionStorage.getItem("user")).data,
         
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
          }},
          mounted(){
            if(this.user.role !== "visitor"){
                rewardsTable.getAllRewards().then(d => {
                    this.rewards = d;
                    this.rewardsList = d;
                })
                this.updateProgressBar();    
            }

          },
          methods: {
            updateProgressBar(){
                const totalPoints = this.user.totalPoints;
                const progressBar = document.getElementsByClassName("progress-bar")[0];
                const width = (totalPoints / 5000) * 100; 
                progressBar.style.width = width + "%";
          },
          redeemReward(reward){
            // Check if the user has enough current points to redeem the reward
            if (this.user.currentPoints >= reward.points){
            // Deduct the reward points from the user's current points
            var confirmRedeem = confirm("Are you sure you want to redeem " + reward.name + "?" 
            + "\nCurrent points: " + this.user.currentPoints + "\nReward points: " + reward.points);
                if(confirmRedeem){
                    var updatedPoints = this.user.currentPoints - reward.points;
                    usersRewardsTable.addUserRewards(reward, updatedPoints).then( () => {
                        this.user.currentPoints = updatedPoints;
                        var updateUser = JSON.parse(sessionStorage.getItem("user"));
                        updateUser.data.currentPoints = updatedPoints;
                        sessionStorage.setItem("user", JSON.stringify(updateUser));
                        
                        alert('Reward redeemed successfully!');
                        setTimeout(function () {
                            router.push({path: '/'}).then(() => {
                                router.go(-1)
                            })
                        }, 500);
                    });

                }
            }else{
                alert('You do not have enough points to redeem this reward.');
            }
          }
        }
}

       
 
</script>





