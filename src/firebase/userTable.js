import { doc, updateDoc, setDoc, getDoc, getDocs, collection, where, query } from 'firebase/firestore'
import { db } from './config'

const userTable = {

    async getUsers() {
        let usersData = [];
        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usersData.push({
            id: doc.id,
            name: doc.data().fname,
            role: doc.data().role,
            currentPoints: doc.data().currentPoints

            });
        });
        return usersData
    },

    async getSingleProfileData(userId) {
      const docRef = doc(db, "users", userId);
      const docSnapshot = await getDoc(docRef);
      
      if (docSnapshot.exists()) {
        const profileData = {
          userId: docSnapshot.id,
          fname: docSnapshot.data().fname,
          address: docSnapshot.data().address,
          m_num: docSnapshot.data().m_num,
          email: docSnapshot.data().email,
          tier: docSnapshot.data().tier,
          image: docSnapshot.data().image,
          currentPoints: docSnapshot.data().currentPoints
        };
        
      
        return profileData;
      } else {
        // Handle if the document doesn't exist
        return null;
      }
    },


    async getUser(uid) {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
    },
    async addPaymentMethod(userData, pMethod) {
      const docRef = doc(db, "users", userData.uid);

      userData.paymentMethods[userData.paymentMethods.length] = pMethod

      //console.log(userData.paymentMethods)
      var toUpdate = {
        paymentMethods: userData.paymentMethods
      }
      const docSnap = await updateDoc(docRef, toUpdate);
},
  async updateUser(user) {
    const docRef = doc(db, "users", user.uid);
    var uid = user.uid;
    if(user.uid){
      delete user.uid;
    }
    const docSnap = await updateDoc(docRef, user);
    user.uid = uid;
  },
  async updateUserPoints(uid, updatedPoints) {
    const docRef = doc(db, "users", uid);

    var toUpdate = {
      currentPoints: updatedPoints
    }

    const docSnap = await updateDoc(docRef, toUpdate);
  },
  

}

export default userTable;