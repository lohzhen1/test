import { doc, updateDoc, setDoc, getDoc, getDocs, collection, where, query, addDoc } from 'firebase/firestore'
import { db } from './config'
import cartTable from './cartTable';

const productsTable = {
    async getProduct(pId) {
        const docRef = doc(db, "products", pId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
    },
    async getAllProducts() {

      let productData = [];
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          productData.push({
          pId: doc.id,
          pName: doc.data().pName,
          desc: doc.data().desc,
          productTier: doc.data().productTier,
          price: doc.data().price,
          image: doc.data().image,
          availQty: doc.data().availQty,
          });
      });
      return productData

  },
    async setProductQty(data) {
      for(let i=0; i < data.length; i++){
        var pId = data[i].pId
        const docRef = doc(db, "products", pId);

        var toUpdate = {
          availQty: Number(data[i].availQty) - Number(data[i].qty)
        }
        const docSnap = await updateDoc(docRef, toUpdate);
      }
  },
    async updateProduct(product) {
      const docRef = doc(db, "products", product.pId);
      delete product.pId;
      const docSnap = await updateDoc(docRef, product);
  },
    async addProduct(data){
      const docRef = await addDoc(collection(db, "products"),
      data);
      
      if(docRef.id){
        return docRef.id
      }
      else{
        return false
      }
  }
      

}


export default productsTable;