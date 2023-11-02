<script setup>

</script>

<template>
    <div class="greennature-page-title-wrapper header-style-5-title-wrapper">
        <div class="greennature-page-title-overlay"></div>
        <div class="greennature-page-title-container container">
            <h1 class="greennature-page-title">Inventory</h1>
        </div>
    </div>
    <!-- is search -->

    <div class="content-wrapper">
        <div class="greennature-content">
            <div class="container-fluid">
                <div class="row mt-4">
                    <div class="col-10" style="text-align: center;">
                        <div class="mb-3">
                            <input type="text" class="form-control" id="search" placeholder="Search for product" v-model="searchText" @keyup="search()">
                        </div>
                    </div>
                    <div class="col-2" style="text-align: center;">
                        <button type="button" class="btn btn-save" @click="showNewModal()"><i class="fa fa-plus"></i>Add Products</button>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col">
                        <table class="table table-striped table-hover table-bordered">
                            <thead class="table-success">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Tier</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Available Quantity</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in productsList" :key="index">
                                    <td><img :src="product.image"></td>
                                    <td>{{ product.pName }}</td>
                                    <td>{{ product.productTier }}</td>
                                    <td>{{ product.desc }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.availQty }}</td>
                                    <td>
                                        <a class="link-primary" @click="showModal(product)">
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
    <div class="container-fluid divContainer" v-bind:class="{ 'open': modalVisible }">
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <form @submit.prevent="updateProduct()">
                <div class="modal-header">
                    <h5 class="modal-title">Edit product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal()"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="pName" placeholder="Product Name" minlength="1" v-model="productInfo.pName" required>
                            <label for="pName">Product Name</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="price" placeholder="Price" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            minlength="1" v-model="productInfo.price" required>
                            <label for="price">Price</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="availQty" placeholder="Available Quantity" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            minlength="1" v-model="productInfo.availQty" required>
                            <label for="availQty">Available Quantity</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="" for="selectedTier">Product Tier: </label> <br>
                            <div class="input-group mb-3" v-if="productTier.length != 0">
                                <select class="form-select" id="selectedTier" v-model="selectedTier">
                                    <option v-for="(tier, index) in productTier" :key="index" :value="index">
                                        {{ tier }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <textarea class="form-control" style="height: 100%;" id="desc" placeholder="Product Description" minlength="1" v-model="productInfo.desc" required
                            rows="3"></textarea>
                            <label for="desc">Product Description</label>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-4" style="text-align: center;">
                            <img id="image" :src="productInfo.image">
                        </div>
                        <div class="col-4" style="text-align: center;">
                            <div id="preview">
                                <img v-if="item.imageUrl" :src="item.imageUrl" />
                            </div>
                            <input type="file" accept="image/*" @change="onChange" id="file"/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-save" >Save changes</button>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>



    <div class="container-fluid divContainer" v-bind:class="{ 'openNew': modalNewVisible }">
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <form @submit.prevent="createProduct()">
                <div class="modal-header">
                    <h5 class="modal-title">Create new product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeNewModal()"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="pNameNew" placeholder="Product Name" v-model="newProduct.pName" required>
                            <label for="pNameNew">Product Name</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="priceNew" placeholder="Price" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            v-model="newProduct.price" required>
                            <label for="priceNew">Price</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="availQtyNew" placeholder="Available Quantity" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                            v-model="newProduct.availQty" required>
                            <label for="availQtyNew">Available Quantity</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="" for="selectedTier">Product Tier: </label> <br>
                            <div class="input-group mb-3" v-if="productTier.length != 0">
                                <select class="form-select" id="selectedTier" v-model="selectedTier">
                                    <option v-for="(tier, index) in productTier" :key="index" :value="index">
                                        {{ tier }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                            <textarea class="form-control" style="height: 100%;" id="descNew" placeholder="Product Description" v-model="newProduct.desc" required
                            rows="3"></textarea>
                            <label for="descNew">Product Description</label>
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
                    <button type="submit" class="btn btn-save" >Create Product</button>
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
    overflow: auto;

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

textarea, select {
    color: #797979;
}
textarea, select {
    background-color: #f5f5f5;
}

select {
    border: 0px;
    outline: none;
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
import productsTable from '../firebase/productsTable';
import storageFunction from '../firebase/storageFunction';
import router from '../router/index.js'

export default {
    data() {
        return {
            products: [], 
            productsList: [],
            searchText: "",
            modalVisible: false,
            productInfo: [],
            item:{
                image : null,
                imageUrl: null
            },
            modalNewVisible: false,
            newProduct: {
                pName: "",
                desc: "",
                price: 1,
                image: "",
                availQty: 1
            },
            productTier: [
                "Like-New - Item is brand new or is as good as new",
                "Slightly-Used - Item has been used for less than 2 year",
                "Well-Used - Item has been used for a few years",
            ],
            selectedTier: 0,
        }
    },
    mounted() {
        productsTable.getAllProducts().then(d => {
            this.products = d;
            this.productsList = d;
        })
    },
    beforeUnmount() {
    },
    methods: {
        search(){
            //console.log(this.searchText)
            this.productsList = this.products.filter(
                (item) => item.pName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
        },
        showModal(product){
            this.productInfo = JSON.parse(JSON.stringify(product));
            for(let i = 0; i < this.productTier.length; i++){
                if(this.productInfo.productTier == this.productTier[i]){
                    this.selectedTier = i;
                    break;
                }
            }
            this.modalVisible = !this.modalVisible;
        },
        closeModal(){
            this.modalVisible = !this.modalVisible;
            this.item.image = null;
            this.item.imageUrl = null;
            this.productInfo = [];
            this.selectedTier = 0;
            document.getElementById('file').value = ""
        },
        showNewModal(){
            this.modalNewVisible = !this.modalNewVisible;
        },
        closeNewModal(){
            this.modalNewVisible = !this.modalNewVisible;
            this.item.image = null;
            this.item.imageUrl = null;
            this.newProduct = {
                pName: "",
                desc: "",
                price: 1,
                image: "",
                availQty: 1
            };
            this.selectedTier = 0;
            document.getElementById('file').value = ""
        },
        onChange(e) {
            const file = e.target.files[0]
            this.item.image = file
            this.item.imageUrl = URL.createObjectURL(file)
        },
        updateProduct(){
            if(this.item.image != null){
                storageFunction.uploadImage(this.item.image, this.productInfo.pId).then(
                    () => {
                        this.productInfo.productTier = this.productTier[this.selectedTier]
                        productsTable.updateProduct(this.productInfo).then(()=>{
                            alert("Update successful");
                            this.closeModal();
                            router.push({path: '/dashboard'}).then(() => {
                                router.push({path: '/inventory'});
                            })
                            
                        });
                });
            }
            else {
                this.productInfo.productTier = this.productTier[this.selectedTier]
                productsTable.updateProduct(this.productInfo).then(()=>{
                    alert("Update successful");
                    this.closeModal();
                    router.push({path: '/dashboard'}).then(() => {
                        router.push({path: '/inventory'});
                    })
                });
            }
        },
        createProduct(){
            var confirmCreate = confirm("Confirm creation of new product?");

            if(confirmCreate){
                this.newProduct.productTier = this.productTier[this.selectedTier]
                productsTable.addProduct(this.newProduct).then( d => {
                    if(d){
                        storageFunction.uploadAndSaveImage(this.item.image, this.newProduct, d).then( async () => {
                            var that = this;
                            setTimeout(function () {
                                alert("Product created successfully");
                                that.closeNewModal();
                                router.push({path: '/dashboard'}).then(() => {
                                    router.push({path: '/inventory'});
                                })
                            }, 500);

                        })
                    }
                    else {
                        alert("Error: Product not created");
                        this.closeNewModal();
                        router.push({path: '/dashboard'}).then(() => {
                            router.push({path: '/inventory'});
                        })
                    }
                })
            }

        }
    }

}   
</script>