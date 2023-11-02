import { doc, setDoc, getDoc, getDocs, collection, where, query, updateDoc, arrayUnion, increment, FieldValue } from 'firebase/firestore'
import { db } from './config'
import productsTable from './productsTable';

const cartTable = {
    async getCart(uid) {
      const docRef = doc(db, "cart", uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        var data = docSnap.data();
        var cartItem = []
        for(let i = 0; i < data.items.length; i++){
          var productDetails = await productsTable.getProduct(data.items[i].pId).then(d => {return d});
          data.items[i]['pName'] = productDetails.pName;
          data.items[i]['availQty'] = productDetails.availQty;
          data.items[i]['price'] = productDetails.price;
          data.items[i]['image'] = productDetails.image;
          data.items[i]['productTier'] = productDetails.productTier;


        }
        return data;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
  },
  async updateCart(uid, data) {
    const docRef = doc(db, "cart", uid);
    sessionStorage.setItem("cart", JSON.stringify(data))
    for(let i = 0; i < data.items.length; i++){
      delete data.items[i]["pName"];
      delete data.items[i]["availQty"];
      delete data.items[i]["price"];
      delete data.items[i]["image"];
      delete data.items[i]["productTier"];
    }
    const docSnap = await updateDoc(docRef, data);
  },
  async clearCart(userId) {
      const docRef = doc(db, "cart", userId);

      var toUpdate = {
        items: []
      }
      const docSnap = await updateDoc(docRef, toUpdate);
      sessionStorage.setItem("cart", JSON.stringify({items: []}))
},
  async addCartItem(uid, product, qty){
    var currentCart = JSON.parse(sessionStorage.getItem("cart"));

    var inCart = false;
    

    for(let i = 0; i < currentCart.items.length; i++){
      if(currentCart.items[i]['pId'] == product.pId){
        if((Number(currentCart.items[i]['qty']) + Number(qty)) >= Number(product.availQty) ){
          currentCart.items[i]['qty'] = product.availQty;
        }
        else {
          currentCart.items[i]['qty'] = Number(currentCart.items[i]['qty']) + Number(qty);
        }
        inCart = true;
        break;
      }
    }

    if(!inCart){
      if(Number(qty) > Number(product.availQty)){
        qty = availQty
      }
      var currentItem = {pName: product.pName, availQty: product.availQty, price: product.price, image: product.image, qty: qty, pId: product.pId }
      currentCart.items.push(currentItem);
    }

    this.updateCart(uid, currentCart);
    
  },

}

export default cartTable;