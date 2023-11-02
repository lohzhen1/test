import { doc, updateDoc, setDoc, getDoc, getDocs, collection, where, query, addDoc } from 'firebase/firestore'
import { db } from './config'

const rewardsTable = {

    async getAllRewards() {

      let rewardsData = [];
      const q = query(collection(db, "rewards"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        rewardsData.push({
          rewardsId: doc.id,
          brand: doc.data().brand,
          duration: doc.data().duration,
          name: doc.data().name,
          qty: doc.data().qty,
          value: doc.data().value,
          image: doc.data().image,
          desc: doc.data().desc,
          points: doc.data().points,
          minSpending: doc.data().minSpending,
          });
      });
      return rewardsData

    },
    async addReward(data){
      const docRef = await addDoc(collection(db, "rewards"),
      data);
      
      if(docRef.id){
        return docRef.id
      }
      else{
        return false
      }
    },
    async updateReward(reward) {
        const docRef = doc(db, "rewards", reward.rewardsId);
        if(reward.rewardsId){
          delete reward.rewardsId;
        }
        const docSnap = await updateDoc(docRef, reward);
    },
      

}


export default rewardsTable;