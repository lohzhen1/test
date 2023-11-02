<script setup>
import LoginPopup from '../views/LoginPopup.vue'

</script>
<template>
  <html>
    <!-- <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    /> -->

    <div v-if="user.role == 'visitor' && showLogin">
        <LoginPopup />
    </div>

    <div class="greennature-page-title-wrapper header-style-5-title-wrapper">
      <div class="greennature-page-title-overlay"></div>
      <div class="greennature-page-title-container container">
        <h1 class="greennature-page-title">Marketplace</h1>
        <span class="greennature-page-caption">Shop sustainably now.</span>
      </div>
    </div>
    <!-- is search -->
    <div class="content-wrapper">
      <div class="greennature-content">
        <!-- Above Sidebar Section -->

        <!-- Sidebar With Content Section-->
        <div class="with-sidebar-wrapper">
          <div class="with-sidebar-container container">
            <div class="with-sidebar-left twelve columns">
              <div class="with-sidebar-content twelve columns">
                <!-- <section id="content-section-1"> -->
                <div class="section-container container">
                  <div class="portfolio-item-wrapper type-classic-portfolio">
                    <!-- <div
                        class="filter clearfix gdlr-core-filterer-wrap gdlr-core-js gdlr-core-item-pdlr gdlr-core-style-text gdlr-core-center-align"
                      >
                        <ul>
                          <li>
                            <a href="#" class="active" data-filter="*">All</a>
                          </li>
                          <li><a href="#" data-filter=".class1">Popular</a></li>
                          <li>
                            <a href="#" data-filter=".class2">New</a>
                          </li>
                          
                        </ul>
                      </div> -->
                    <input
                      type="text"
                      class="form-control"
                      id="search"
                      placeholder="Search for product"
                      v-model="searchText"
                      @keyup="search()"
                    />
                    <br />

                    <div
                      class="portfolio-item-holder greennature-portfolio-column-2"
                    >
                      <div
                        class="greennature-isotope filter-container"
                        data-type="portfolio"
                        data-layout="masonry"
                      >
                        <div class="clear"></div>

                        <div class="container overflow-hidden">
                          <div class="row">
                            <!-- modal -->
                            <div v-if="modal.isModalOpen">
                              <div class="modal" tabindex="-1" role="dialog">
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title">
                                        {{ modal.product.pName }}
                                      </h5>

                                      <button
                                        type="button"
                                        class="close px-3 btn btn-close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        @click="closeModal()"
                                      ></button>
                                    </div>

                                    <div class="modal-body">
                                      <div
                                        class="modal-image p-1 mb-1 overflow-hidden"
                                      >
                                        <img :src="modal.product.image" />
                                      </div>

                                      <div
                                        class="d-flex justify-content-between mb-2"
                                      >
                                        <span
                                          v-if="
                                            modal.product.productTier ==
                                            'Slightly-Used - Item has been used for less than 2 year'
                                          "
                                          class="tiers badge"
                                          style="background: rgb(220, 220, 145)"
                                          >{{
                                            modal.product.productTier
                                          }}</span
                                        >
                                        <span
                                          v-if="
                                            modal.product.productTier ==
                                            'Well-Used - Item has been used for a few years'
                                          "
                                          class="tiers badge"
                                          style="background: rgb(211, 139, 150)"
                                          >{{
                                            modal.product.productTier
                                          }}</span
                                        >
                                        <span
                                          v-if="
                                            modal.product.productTier ==
                                            'Like-New - Item is brand new or is as good as new'
                                          "
                                          class="tiers badge"
                                          style="background: rgb(124, 165, 124)"
                                          >{{
                                            modal.product.productTier
                                          }}</span
                                        >
                                        <span
                                          style="
                                            font-weight: 500;
                                            color: black;
                                            font-size: large;
                                          "
                                          >${{ modal.product.price }}</span
                                        >
                                      </div>
                                      <p>{{ modal.product.desc }}</p>
                                    </div>

                                    <div
                                      class="modal-footer"
                                      style="
                                        display: flex;
                                        align-items: center;
                                        gap: 15px;
                                        justify-content: center;
                                      "
                                    >
                                      <button
                                        class="btn-sign p-3"
                                        style="font-size: x-large"
                                        v-if="modal.product.qty == 0"
                                        disabled
                                      >
                                        -
                                      </button>
                                      <button
                                        class="btn-sign p-3"
                                        style="font-size: x-large"
                                        v-else
                                        @click="modal.product.qty--"
                                      >
                                        -
                                      </button>
                                      <span style="font-size: large">
                                        {{ modal.product.qty }}
                                      </span>
                                      <button
                                        class="btn-sign p-3"
                                        v-if="
                                          modal.product.qty ==
                                          modal.product.availQty
                                        "
                                        disabled
                                        style="font-size: large"
                                      >
                                        +
                                      </button>
                                      <button
                                        class="btn-sign p-3"
                                        style="font-size: large"
                                        @click="modal.product.qty++"
                                        v-else
                                      >
                                        +
                                      </button>
                                      <button
                                        class="btn-add p-3"
                                        style="font-size: medium; width: 300px"
                                        @click="
                                          addToCart(
                                            modal.product,
                                            modal.product.qty
                                          )
                                        "
                                      >
                                        Add to Cart
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- end of modal -->

                            <div
                              class="col-md-6 col-lg-3"
                              v-for="(product, index) in productsList"
                              :key="index"
                              @change="updateProduct"
                            >
                              <div
                                class="card mb-4"
                                style="min-height: 390px; display: flex"
                              >
                                <!-- Card content -->
                                <div class="card-body">
                                  <div
                                    @click="!openModal(product)"
                                    style="cursor: pointer"
                                  >
                                    <div
                                      class="card-img-top"
                                      style="
                                        overflow: hidden;
                                        max-width: 120px;
                                        max-height: 120px;
                                        min-height: 60px;
                                        min-width: 60px;
                                        margin: auto;
                                        display: flex;
                                        margin-top: 5%;
                                        margin-bottom: 5%;
                                      "
                                    >
                                      <img
                                        :src="product.image"
                                        style="position: relative"
                                      />
                                      <span
                                        v-if="
                                          product.productTier ==
                                          'Slightly-Used - Item has been used for less than 2 year'
                                        "
                                        class="tier2 badge"
                                        style="
                                          position: absolute;
                                          left: 15px;
                                          top: 15px;
                                        "
                                        >{{ product.productTier }}</span
                                      >
                                      <span
                                        v-if="
                                          product.productTier ==
                                          'Well-Used - Item has been used for a few years'
                                        "
                                        class="tier3 badge"
                                        style="
                                          position: absolute;
                                          left: 15px;
                                          top: 15px;
                                        "
                                        >{{ product.productTier }}</span
                                      >
                                      <span
                                        v-if="
                                          product.productTier ==
                                          'Like-New - Item is brand new or is as good as new'
                                        "
                                        class="tier1 badge"
                                        style="
                                          position: absolute;
                                          left: 15px;
                                          top: 15px;
                                        "
                                        >{{ product.productTier }}</span
                                      >
                                    </div>
                                    <div
                                      class="d-flex"
                                      style="
                                        justify-content: space-between;
                                        font-weight: 500;
                                        font-size: 150%;
                                        color: black;
                                      "
                                    >
                                      <span class="card-title">
                                        {{ product.pName }}
                                      </span>
                                      <span>${{ product.price }}</span>
                                    </div>
                                    <p
                                      class="card-text"
                                      v-if="product.desc.length <= 60"
                                    >
                                      {{ product.desc }}
                                    </p>
                                    <p class="card-text" v-else>
                                      {{ product.desc.slice(0, 60) }} ...
                                    </p>
                                  </div>
                                  <br />
                                  <br />
                                  <div
                                    style="
                                      display: flex;
                                      align-items: center;
                                      gap: 15px;
                                    "
                                    class="card-footer"
                                  >
                                    <button
                                      class="btn-sign"
                                      v-if="product.qty == 0"
                                      disabled
                                    >
                                      -
                                    </button>
                                    <button
                                      class="btn-sign"
                                      v-else
                                      @click="product.qty--"
                                    >
                                      -
                                    </button>
                                    <span>
                                      <!-- {{ product.availQty }} -->
                                      {{ product.qty }}
                                    </span>
                                    <button
                                      class="btn-sign"
                                      v-if="product.qty == product.availQty"
                                      disabled
                                    >
                                      +
                                    </button>
                                    <button
                                      class="btn-sign"
                                      @click="product.qty++"
                                      v-else
                                    >
                                      +
                                    </button>
                                    <button
                                      class="btn-add"
                                      @click="
                                        addToCart(product, product.qty)
                                      "
                                    >
                                      Add to Cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- card end -->
                      </div>
                    </div>
                    <!-- <div class="clear"></div> -->
                  </div>

                  <!-- <div class="greennature-pagination greennature-ajax">
                        <span class="page-numbers current" data-paged="1"
                          >1</span
                        >
                        <a class="page-numbers" data-paged="2">2</a>
                        <a class="next page-numbers" data-paged="2">
                          Next &rsaquo;</a
                        >
                      </div> -->
                </div>
                <!-- <div class="clear"></div> -->
              </div>
              <!-- </section> -->
            </div>
            <!-- <div class="clear"></div> -->
          </div>
          <!-- <div class="clear"></div> -->
        </div>
      </div>

      <!-- Below Sidebar Section -->
    </div>
    <div class="clear"></div>
    <!-- </div> -->
  </html>
</template>

<style scoped>
.tier1,
.tier2,
.tier3 {
  padding: 6px;
  color: white;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  transition: max-width 0.3s ease; /* Smooth transition effect */
}

.tiers {
  padding: 5px;
  color: white;
  font-weight: 400;
  font-size: small;
}

.tier1 {
  background: rgb(124, 165, 124);
  max-width: 49px; /* Set your desired maximum width */
}
.tier2 {
  background: rgb(220, 220, 145);
  max-width: 66px; /* Set your desired maximum width */
}
.tier3 {
  background: rgb(211, 139, 150);
  max-width: 53px; /* Set your desired maximum width */
}

.tier1:hover,
.tier2:hover,
.tier3:hover {
  max-width: 300px; /* Set your desired extended width */
}

.btn-sign {
  display: flex;
  width: 30px;
  height: 30px;
  padding: 13px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: white;
  border: solid 1px #90ba92;
}
.btn-sign:hover {
  background-color: #90ba92;
  color: white;
}

.btn-sign:disabled {
  background: white;
  color: grey;
}

.btn-add {
  display: flex;
  font-size: x-small;
  max-width: 140px;
  width: 100px;
  height: 30px;
  padding: 13px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: white;
  border: solid 1px #3b5f3e;
  color: black;
}
.btn-add:hover {
  background: #3b5f3e;
  color: white;
}

.modal {
  display: flex;
  z-index: 9999;
  position: fixed;
  top: 7%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff; /* modal background color */
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); /* box shadow for modal */
  z-index: 10000; /* modal content should appear above the backdrop */
}

.modal-image {
  display: block;
  margin: auto;
  max-width: 40%;
  min-width: 20%;
  max-height: 40%;
  min-height: 20%;
  zoom: 110%;
}
</style>

<script>
import productsTable from "../firebase/productsTable";
import cartTable from "../firebase/cartTable";
import userTable from "../firebase/userTable";

export default {
  data() {
    return {
      products: [
        // {
        //   pId: "",
        //   name: "",
        //   desc: "",
        //   price: "",
        //   image: "",
        //   tier: "",
        //   availQty: 0,
        //   qty: 0,
        // },
      ],
      user: JSON.parse(sessionStorage.getItem("user")).data,
      productsList: [],
      modal: {
        isModalOpen: false,
        product: {},
      },
      showLogin: false,
      searchText: "",
      cart: [],
      filter: "",
    };
  },
  beforeMount() {
    productsTable.getAllProducts().then((d) => {
      this.products = d;
      for (const product of this.products) {
        product.qty = 0;
      }
      this.productsList = JSON.parse(JSON.stringify(this.products));

      // console.log(this.products);
    });
  },
  methods: {
    addToCart(product, qty) {
      if (this.user.role == "visitor") {
        this.showLogin = true;
        // alert("Login to use the cart");
        
      } else {
        // const product = this.getProduct(pId);
        if (product.qty > 0) {
          // this.cart.push({ pId: pId, itemQty: qty });
          var prod = JSON.parse(JSON.stringify(product));
          delete prod["qty"];
          cartTable.addCartItem(this.user.uid, prod, qty).then((d) => {
            // console.log(d);
            alert("Successfully added " + qty + " qty of " + prod.pName + " to cart!")
          });

          // if successful update cart
          // if (cartTable.updateCart(uId, this.cart)) {
          //   //update product table and update product in firebase
          //   this.product.availQty -= qty;
          //   productsTable.updateProduct(product);
          //   alert("successfully added" + this.product.name);
          // } else {
          //   alert(
          //     this.product.name +
          //       " is not added successfully. Please try again."
          //   );
          // }
        }
        else {
          alert("Please add at least 1 item!");
        }
      }
      // if (this.user.role != "visitor") {
      //   //if success
      //   if (cartTable.updateCart(this.user.uId, this.cart)) {
      //     this.product.availQty -= qty;
      //   }
      //   //if fail
      //   alert(
      //     this.product.name + " is not added successfully. Please try again."
      //   );
      // }
    },
    // getProduct(pId) {
    //   return productsTable.getProduct(pId);
    //   // return this.products.find((product) => product.pId === pId);
    // },
    search() {
      // console.log(this.searchText);
      this.productsList = this.products.filter(
        (item) =>
          item.pName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
      );
    },
    // getUser(uId) {
    //   if (uId == "") {
    //     alert("Login to use the cart");
    //     //need to redirect?
    //     //router.push({ path: "./Login" });
    //   } else if (this.user.role != "visitor" || this.user.role != "") {
    //     return userTable.getUser(uId);
    //   }
    //   return false;
    // },
    openModal(product) {
      // const product = this.products.;
      // console.log(product);
      this.modal.product = product;
      this.modal.isModalOpen = !this.modal.isModalOpen;
    },
    closeModal() {
      this.modal.product = {};
      this.modal.isModalOpen = !this.modal.isModalOpen;
    },
  },
  computed: {
    // updateProduct() {
    //   const pId = this.products.pId;
    //   const product = this.getProduct(pId);
    //   this.product.pId = product.pId;
    //   this.product.name = product.pName;
    //   this.product.desc = product.desc;
    //   this.product.price = product.price;
    //   this.product.image = product.image;
    //   this.product.availQty = product.availQty;
    //   this.product.tier = product.productTier;
    //   this.product.qty = 0;
    // },

    // getProducts() {
    //   const productsTable = productsTable.getProducts();
    //   this.products = productsTable;
    // },
  },
};
</script>
<style scoped></style>
