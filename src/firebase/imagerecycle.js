import { doc, updateDoc, setDoc, getDoc, getDocs, collection, where, query, addDoc} from 'firebase/firestore';
import { db } from './config';


const imagerecycle = {

    async getAllrecycleimage() {
     
      let recycleinfo = [];
      const q = query(collection(db, "recycleimage"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        recycleinfo.push({
          recycleId: doc.id,
          image: doc.data().image,
          userId:doc.data().userId,
          username: doc.data().username,
          //currentPoints: doc.data().currentPoints
          });
      });

      return recycleinfo

 
    },

    async addrecycleimage(data){
        const docRef = await addDoc(collection(db, "recycleimage"),
        data);
        
        if(docRef.id){
          return docRef.id
        }
        else{
          return false
        }
    },


      
};

export default imagerecycle;

