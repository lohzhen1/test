import { doc, addDoc, setDoc, getDoc, getDocs, collection, where, query } from 'firebase/firestore'
import { db } from './config'
import cartTable from './cartTable';

const ordersTable = {
    async getOrders(pId) {
        const docRef = doc(db, "orders", pId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
    },
    async addOrders(data){
      const docRef = await addDoc(collection(db, "orders"),
      data);

      cartTable.clearCart(data.userId)
      
      if(docRef.id){
        return true
      }
      else{
        return false
      }
    },
    
    async getuserOrder(userId){

      let userorder = [];
      const q = query(collection(db, "orders"),where("userId","==",userId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          userorder.push({
          oId: doc.id,
          ccd: doc.data().ccd,
          datetime: doc.data().datetime,
          delivery: doc.data().delivery,
          items: doc.data().items,
          paymentMethod: doc.data().paymentMethod,
          reward: doc.data().reward,
          totalPrice: doc.data().totalPrice,
          userId: doc.data().userId

          });
      });
      return userorder;



    },


  }


export default ordersTable;