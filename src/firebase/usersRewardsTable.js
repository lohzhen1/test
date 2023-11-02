import { doc, updateDoc, setDoc, getDoc, getDocs, collection, where, query, addDoc } from 'firebase/firestore'
import { db } from './config'
import userTable from './userTable';
import rewardsTable from './rewardsTable';

const usersRewardsTable = {

    async getUsersRewards(userId) {

      let rewardsData = [];
      var theDate = new Date();
      const q = query(collection(db, "usersRewards"), where("userId","==",userId), 
      where("used", "==",false)
      , where("expires", ">=", theDate)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        rewardsData.push({
          usersRewardsId: doc.id,
          expires: doc.data().expires,
          minSpending: doc.data().minSpending,
          name: doc.data().name,
          value: doc.data().value,
          used: doc.data().used,
          image: doc.data().image,
          brand: doc.data().brand,

          });
      });
      return rewardsData

    },
    async updateUsersReward(reward) {
        const docRef = doc(db, "usersRewards", reward.usersRewardsId);
        if(reward.usersRewardsId){
          delete reward.usersRewardsId;
        }
        const docSnap = await updateDoc(docRef, reward);
    },
    async addUserRewards(reward, updatedPoints){

      var user = JSON.parse(sessionStorage.getItem("user")).data;

      userTable.updateUserPoints(user.uid, updatedPoints);
      var theDate = new Date();
      theDate.setDate(theDate.getDate() + Number(reward.duration))

      var toAdd = {
        rewardId: reward.rewardsId,
        userId: user.uid,
        name: reward.name,
        used: false,
        value: reward.value,
        minSpending: reward.minSpending,
        expires: theDate,
        image: reward.image,
        brand: reward.brand
      }

      reward.qty = Number(reward.qty) - 1;
      rewardsTable.updateReward(reward)

      const docRef = await addDoc(collection(db, "usersRewards"),
      toAdd);
      
      if(docRef.id){
        return docRef.id
      }
      else{
        return false
      }
    },
      

}


export default usersRewardsTable;