<script setup>
import LoginPopup from '../views/LoginPopup.vue'
import ViewRewards from '../views/ViewRewards.vue'


</script>
<template>
    <!-- 
        Import LoginPop from the view folder
        Login popup for users not logged in 
        Retrieve user in the data() and check if their role is
    -->
    <div v-if="user.role == 'visitor'">
        <LoginPopup />
    </div>

    <div class="container-fluid">
        <div class="card mb-3 shadow" style="width: 100%" v-if="cart.items.length != 0">
        <div class="row g-0">
            <div class="col-lg-8">
                <!-- <div class="card rounded-0" style="width: 18rem;"> -->
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h3 class="card-title" style="font-weight: bold;">Shopping Cart</h3>
                        </div>
                        <div class="col-auto">
                            <h3 style="width: fit-content;" v-if="numOfItems > 1">{{ numOfItems }} Items</h3>
                            <h3 style="width: fit-content;" v-else>1 Item</h3>
                        </div> 
                    </div>

                    <!-- <div class="row justify-content-center">
                <div class="col">
                    <h3>Shopping Cart</h3>
                </div> -->
                <!-- <div class="col ">
                    <h3>{{ numOfItems }} Items</h3>
                </div>
            </div> -->
            <hr>
                <div class="row header">
                    <div class="col-6">
                        <h6 class="headerText">PRODUCT DETAILS</h6>
                    </div>
                    <div class="col-3">
                        <h6 class="headerText">ITEM PRICE</h6>
                    </div>
                    <div class="col-3">
                        <h6 class="headerText">QUANTITY</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="list-group" style="padding-right: 0px;">
                        <div v-for="(item,index) in cart.items" :key="index" class="list-group-item list-group-item-action rounded-0">
                            <div class="row">
                                <div class="col-2">
                                    <img :src=item.image class="img-thumbnail float-start" alt="...">
                                </div>
                                <div class="col-4">
                                    <h5>{{ item.pName }}</h5>
                                </div>
                                <div class="col-3">
                                    <h6>SGD {{ item.price }}</h6>
                                </div>
                                <div class="col-2">
                                    <div class="mb-3">
                                    <input type="number" :id="item.pId" class="form-control" @change="calculateTotal()" placeholder="qty" min=1 :max=item.availQty v-model="item.qty" onkeydown="return false">
                                    </div>
                                </div>
                                <div class="col-1">
                                    <button type="button" class="btn btn-danger" @click.prevent="removeItem(index)"><i class="fa fa-trash" style="margin: auto;"></i></button>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="list-group-item list-group-item-action">
                            <div class="row">
                                <div class="col-2">
                                    <img src="images/logo.png" class="img-thumbnail float-start" alt="...">
                                </div>
                                <div class="col-4">
                                    <h5>Graphic card</h5>
                                </div>
                                <div class="col-3">
                                    <h6>SGD 50</h6>
                                </div>
                                <div class="col-2">
                                    <div class="mb-3">
                                    <input type="number" class="form-control" value=6 id="qty1" placeholder="qty" min=1 onkeydown="return false">
                                    </div>
                                </div>
                                <div class="col-1">
                                    <button type="button" class="btn btn-danger"><i class="fa fa-trash" style="margin: auto;"></i></button>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>

                    </div>
                <!-- </div> -->
            </div>
            <div class="col-lg-4">
                <div class="card rounded-0" style="width: 18rem; border: 0px; border-left: 1px solid #E8E8E8">
                <form @submit.prevent="checkOut()">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title" style="font-weight: bold;">Payment Summary</h5>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="ccdName" placeholder="Cardholder's Name" minlength="1" v-model="ccdName" required>
                            <label for="ccdName">Cardholder's Name</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="ccdNumber" placeholder="Card Number" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            minlength="16" maxlength="16" @keyup="formatCreditCard()" v-model="ccdNumber" required>
                            <label for="ccdNumber">Card Number</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="ccdExpiration" placeholder="MM/YYYY" minlength="6" maxlength="6" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            @keyup="formatExpiration()" v-model="ccdExpiration" required>
                            <label for="ccdExpiration">Expiration</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating">
                            <input type="password" class="form-control" id="cvv" placeholder="CVV" minlength="3" maxlength="3" v-model="cvv" required onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
                            <label for="cvv">CVV</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="input-group mb-3" v-if="paymentMethods.length != 0">
                                <!-- <label class="input-group-text" for="inputGroupSelect01">Saved cards</label> -->
                                <select class="form-select" id="inputGroupSelect01" @change="selectPayment()" v-model="selectedValue">
                                    <option value="-1">Choose a card</option>
                                    <option v-for="(paymentMethod, index) in paymentMethods" :key="index" :value="index">
                                        Card ending: {{ paymentMethod.ccdNumber.slice(15,19) }}
                                    </option>
                                </select>
                            </div>
                            <div v-if="selectedValue == '-1'">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="save" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Save card for future use?
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>

                    <div class="row">
                        <div class="col">
                            <label class="" for="selectedCollection">Delivery option: </label> <br>
                            <div class="input-group mb-3" v-if="collections.length != 0">
                                <select class="form-select" id="selectedCollection" v-model="selectedCollection">
                                    <option v-for="(collection, index) in collections" :key="index" :value="index">
                                        {{ collection }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row" v-if="usersRewards.length != 0">
                        <div class="col">
                            <label class="" for="selectedRewards">Vouchers: </label> <br>
                            <div class="input-group mb-3" >
                                <select class="form-select" id="selectedRewards" @change="selectReward()" v-model="selectedRewards">
                                    <option value="-1" selected>None</option>
                                    <option v-for="(rewards, index) in usersRewards" :key="index" :value="index" :disabled="(Number(total) <= Number(rewards.minSpending))">
                                        {{ rewards.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <p class="card-text">Subtotal: </p>
                        </div>
                        <div class="col-6">
                            <p class="card-text alignRight">SGD {{ subtotal }} </p>
                        </div>
                    </div>
                    <div class="row" v-if="usersRewards.length != 0">
                        <div class="col-6">
                            <p class="card-text">Vouchers used: </p>
                        </div>
                        <div class="col-6">
                            <p class="card-text alignRight">- SGD {{ rewardValue }} </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p class="card-text">Tier({{ userTier }}): </p>
                        </div>
                        <div class="col-6">
                            <p class="card-text alignRight"> {{ tierDisc[userTier] }}% off </p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-6">
                            <p class="card-text">Points earned: </p>
                        </div>
                        <div class="col-6">
                            <p class="card-text alignRight"> {{ pointsEarned }} </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p class="card-text">Total: </p>
                        </div>
                        <div class="col-6">
                            <p class="card-text alignRight">SGD {{ total }} </p>
                        </div>
                    </div>
                    <div class="row" style="text-align: center; margin-top: 10px;">
                        <div class="col">
                            <button type="submit" href="#" class="btn btn-primary checkout" v-bind:class="{ 'disabled': cart.items.length == 0 }" >
                                Pay with Credit/Debit Card
                            </button>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <div id="paypalButton">
                            </div>
                        </div>
                    </div>
                </div>
                </form>
                </div>
            </div>
        </div>
        </div>

        <div class="row" v-else>
            <div class="col">
                <h3>No items in cart yet</h3>
                <button class="btn btn-primary" @click="goToMarketplace()"><i class="fa fa-arrow-right"></i>Go to Marketplace</button>
            </div>
        </div>

        <div class="row justify-content-center" >

            <!-- <div class="col-lg-7" id="items">

            </div> -->
            <div class="col-lg-8 d-flex justify-content-center" >

            </div>
            <div class="col-lg-4 d-flex justify-content-center" id="paymentMethod">

            </div>
        </div>

        <!-- <ViewRewards /> -->

    </div>
</template>
<style scoped>
@media screen and (min-width: 767px) {
  .container-fluid {
    margin-top: 150px;
  }
}
.container-fluid{
    margin-bottom: 150px;
}
.alignRight{
    text-align: right;
}
img {
    width: 100px;
    height: 100px;
}
.btn-primary {
    background-color: rgba(37, 53, 38);
    color: white;
    border-color: rgba(37, 53, 38);
}

.checkout {
    width: 100%;
    font-weight: bold;
}

.card {
    width: 100% !important;
}

/* #paypalButton{
    display: flex;
    align-items: center;
    text-align: center;
} */

.header{
    background-color: #90BA92;
}

.headerText{
    color: white;
    margin: 18px 18px 18px 0px;
    font-weight: bold;
}

</style>
<script>
import store from '../store/index'
import router from '../router/index.js'
import cartTable from '../firebase/cartTable';
import ordersTable from '../firebase/ordersTable';
import productsTable from '../firebase/productsTable';
import userTable from '../firebase/userTable';
import usersRewardsTable from '../firebase/usersRewardsTable';
import { RouterLink } from 'vue-router';
import { loadScript } from '@paypal/paypal-js';


export default {
    data() {
        return {
            ccdNumber: "",
            ccdExpiration: "",
            cvv: "",
            ccdName: "",
            selectedValue: -1,
            user: JSON.parse(sessionStorage.getItem("user")).data,
            cart: {items: []},
            paymentMethods: [],
            subtotal: 0,
            total: 0,
            save: false,
            paid: false,
            collections: [
                        "Self-Collection: Earthkeepers HQ lvl 1 collection point",
                        "Self-Collection: Earthkeepers Orchard collection point"
                        ],
            selectedCollection: 0,
            usersRewards: [],
            selectedRewards: -1,
            rewardValue: 0,
            tierDisc: {
                'no tier': 0,
                'bronze': 5,
                'silver': 10,
                'gold': 20
            },
            tierPoints: {
                'no tier': 100,
                'bronze': 125,
                'silver': 150,
                'gold': 200
            },
            userTier: 'no tier',
            pointsEarned: 0
        }
    },
    mounted() {
        // if(this.user.role == 'visitor'){
        //     alert("Login to use the cart")
        //     // router.push({path: '/login'})
        // }
        if(this.user.role != 'visitor'){
            this.userTier = this.user.tier;
            // cartTable.getCart(this.user.uid)
            // .then(d => {
            //     this.paymentMethods = this.user.paymentMethods
            //     this.cart = d
            //     this.calculateTotal()
            //     if(d.items.length != 0){
            //         this.loadPaypal()
            //     }
            //     cartTable.addCartItem(this.user.uid, {pName: "CPU", availQty: "10", price: "10", image: "https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FX6xNvDUkpszBljh8kNlT?alt=media&token=bb57475c-f2c0-4565-b122-fe1f5fdf371f&_gl=1*8pkkjx*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ3NzAuNTEuMC4w", pId: "jvUyrT3XiI2QohdZGLkI" }, 2)
                
            // })
            this.paymentMethods = this.user.paymentMethods
            this.cart = JSON.parse(sessionStorage.getItem("cart"))
            this.calculateTotal()
            if(this.cart.items.length != 0){
                this.loadPaypal()
            }
            // cartTable.addCartItem(this.user.uid, {pName: "CPU", availQty: "7", price: "10", image: "https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FX6xNvDUkpszBljh8kNlT?alt=media&token=bb57475c-f2c0-4565-b122-fe1f5fdf371f&_gl=1*8pkkjx*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ3NzAuNTEuMC4w", pId: "X6xNvDUkpszBljh8kNlT" }, 2)
            usersRewardsTable.getUsersRewards(this.user.uid)
            .then(d => {
                this.usersRewards = d;
            })

        }


    },
    created(){
        // usersRewardsTable.addUserRewards({
        //     brand: "Earthkeepers",
        //     desc: "$5 off Earthkeepers Marketplace items with no min. spending",
        //     duration: "30",
        //     image: "https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FTyEj5oLBnM7PadTSWqUx?alt=media&token=233616c0-5930-46b1-9bef-267dfa7f0edd",
        //     minSpending: 0,
        //     name: "$5 Earthkeepers voucher",
        //     points: "250",
        //     qty: "10",
        //     value: "5",
        //     rewardsId: "TyEj5oLBnM7PadTSWqUx",

        // }, 950);
    },
    beforeUnmount(){
        if(this.user.role != 'visitor' && this.paid == false){
            cartTable.updateCart(this.user.uid,this.cart);
        }
    },
    computed: {
        numOfItems() {
            return this.cart.items.length
        }
    },
    methods: {
        formatCreditCard() {
            if(this.ccdNumber.length == 16){
                var newccd = ""
                for(let i = 0; i < this.ccdNumber.length; i=i+4){
                    newccd += this.ccdNumber.substring(i, i+4) + " ";
                }
                this.ccdNumber = newccd;
            }

        },
        loadPaypal(){
            var that = this;
            setTimeout(function () {
                loadScript({ clientId: "test",
                disableFunding: "card",
                currency: "SGD" })
                .then((paypal) => {
                    paypal
                        .Buttons({
                            style: {
                                label: "pay",
                                tagline: true ,
                                layout: "horizontal"
                            },
                            createOrder: function(data, actions) {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            // e.g reference.price
                                            value: that.total,
                                        },
                                    }],
                                    application_context: {
                                        brand_name: "Earthkeepers",
                                        shipping_preference: "NO_SHIPPING"
                                    }
                                });
                            },
                            onApprove: function(data, actions) {
                                return actions.order.capture().then(function(orderData) {
                                    // Successful capture!
                                    // e.g. Inertia.post(route('order.update', reference.orderId)
                                    setTimeout(function () {
                                        that.paypalCheckOut()
                                    }, 500);
                                });
                            },
                        })
                        .render("#paypalButton")
                        .catch((error) => {
                            console.error("failed to render the PayPal Buttons", error);
                        });
                })
                .catch((error) => {
                    console.error("failed to load the PayPal JS SDK script", error);
                });

            }, 500);
        },
        formatExpiration() {
            if(this.ccdExpiration.length == 6){
                var newExpiration = ""
                newExpiration = this.ccdExpiration.substring(0, 2) + "/" + this.ccdExpiration.substring(2, 6);
                
                this.ccdExpiration = newExpiration;
            }

        },
        removeItem(index) {
            var confirmRemove = confirm("Are you sure you want to remove this item?");
            if(confirmRemove){
                this.cart.items.splice(index, 1);
            }
        },
        selectPayment() {
            if(this.selectedValue != -1){
                this.ccdNumber = this.paymentMethods[this.selectedValue].ccdNumber
                this.ccdExpiration = this.paymentMethods[this.selectedValue].ccdExpiration
                this.cvv = this.paymentMethods[this.selectedValue].cvv
                this.ccdName = this.paymentMethods[this.selectedValue].ccdName
                this.formatCreditCard()
                this.formatExpiration()
            }
            else {
                this.ccdNumber = ""
                this.ccdExpiration = ""
                this.cvv = ""
                this.ccdName = ""
            }

        },
        selectReward() {
            if(this.selectedRewards != -1){
                this.rewardValue = this.usersRewards[this.selectedRewards].value;
                this.calculateTotal();

            }
            else{
                this.rewardValue = 0
                this.calculateTotal();
            }
        },
        calculateTotal() {
            this.subtotal = 0
            for(let i = 0; i < this.cart.items.length; i++){
                var subT = this.cart.items[i].price * this.cart.items[i].qty
                this.subtotal += subT
            }
            this.subtotal = this.subtotal.toFixed(2)
            this.total = ((this.subtotal - this.rewardValue) * ((100 - this.tierDisc[this.userTier])/100)).toFixed(2)
            this.pointsEarned = Math.round(this.total * (this.tierPoints[this.userTier])/100); 

        },
        checkOut() {

            var checkOut = confirm("Confirm checkout?");

            if(checkOut){
                var cartItems = JSON.parse(JSON.stringify(this.cart.items))
                // for(let i = 0; i < cartItems.length; i++){
                //     delete cartItems[i]["pName"];
                //     delete cartItems[i]["availQty"];
                //     delete cartItems[i]["price"];
                //     delete cartItems[i]["image"];
                // }
                if(this.selectedRewards != -1){
                    var rewardName = this.usersRewards[this.selectedRewards].name;
                    this.usersRewards[this.selectedRewards].used = true;
                }
                else {
                    var rewardName = "None"
                }

                var order = {
                    items: cartItems,
                    ccd: this.ccdNumber.substring(15,19),
                    totalPrice: Number(this.total),
                    userId: this.user.uid,
                    datetime: new Date(),
                    paymentMethod: "Credit card",
                    delivery: this.collections[this.selectedCollection],
                    reward: rewardName,
                    pointsEarned: this.pointsEarned,
                }

                if(this.save == true && this.selectedValue == '-1'){
                    var pMethod = {
                        ccdExpiration: this.ccdExpiration,
                        ccdName: this.ccdName,
                        ccdNumber: this.ccdNumber,
                        cvv: this.cvv,
                        mode: "ccd"
                    }
                    userTable.addPaymentMethod(this.user, pMethod)
                }

                ordersTable.addOrders(order)
                .then(d => {
                    if(d){
                        if(this.selectedRewards != -1){
                            usersRewardsTable.updateUsersReward(this.usersRewards[this.selectedRewards])
                        }
                        this.user.currentPoints = Number(this.pointsEarned) + Number(this.user.currentPoints);
                        this.user.totalPoints = Number(this.pointsEarned) + Number(this.user.totalPoints);
                        userTable.updateUser(this.user)
                        productsTable.setProductQty(this.cart.items)
                        .then(() => {
                            this.paid = true
                            router.push({path: '/ordersviews'})
                            alert("Thank you for your purchase!")
                        })
                    }
                    else{
                        alert("Error in purchasing, try again later!")
                    }
                })
            }

        },
        paypalCheckOut() {

            var cartItems = JSON.parse(JSON.stringify(this.cart.items))
            // for(let i = 0; i < cartItems.length; i++){
            //     delete cartItems[i]["pName"];
            //     delete cartItems[i]["availQty"];
            //     delete cartItems[i]["price"];
            //     delete cartItems[i]["image"];
            // }
            if(this.selectedRewards != -1){
                var rewardName = this.usersRewards[this.selectedRewards].name;
                this.usersRewards[this.selectedRewards].used = true;
            }
            else {
                var rewardName = "None"
            }

            var order = {
                items: cartItems,
                ccd: "NIL",
                totalPrice: Number(this.total),
                userId: this.user.uid,
                datetime: new Date(),
                paymentMethod: "Paypal",
                delivery: this.collections[this.selectedCollection],
                reward: rewardName,
                pointsEarned: this.pointsEarned,
            }

            // if(this.save == true && this.selectedValue == '-1'){
            //     var pMethod = {
            //         ccdExpiration: this.ccdExpiration,
            //         ccdName: this.ccdName,
            //         ccdNumber: this.ccdNumber,
            //         cvv: this.cvv,
            //         mode: "ccd"
            //     }
            //     userTable.addPaymentMethod(this.user, pMethod)
            // }

            ordersTable.addOrders(order)
            .then(d => {
                if(d){
                    if(this.selectedRewards != -1){
                        usersRewardsTable.updateUsersReward(this.usersRewards[this.selectedRewards])
                    }
                    this.user.currentPoints = Number(this.pointsEarned) + Number(this.user.currentPoints);
                    this.user.totalPoints = Number(this.pointsEarned) + Number(this.user.totalPoints);
                    userTable.updateUser(this.user)
                    productsTable.setProductQty(this.cart.items)
                    .then(() => {
                        this.paid = true
                        router.push({path: '/ordersviews'})
                        alert("Thank you for your purchase!")
                    })
                }
                else{
                    alert("Error in purchasing, try again later!")
                }
            })
            

        },
        goToMarketplace(){
            router.push({path: '/marketplace'})
        },
    },
}
</script>