import { doc, updateDoc, setDoc, getDoc, getDocs, collection, where, query, addDoc} from 'firebase/firestore';
import { db } from './config';


const Ewastebinmarker = {

    async getAllEwastebins() {
        const querySnapshot = await getDocs(collection(db, "Map"));

        const ewastebins = [];

        

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // Accessing the field values
            const image = data.image;
            const options = data.options;
       
   

            // Accessing the nested fields
            const iconUrl = options.icon.url;
            const title = options.title
            const position = data.options.position;
            const locandpos= options.locandpos;
            const recycleimage = options.recycleimage
      

            // Create an object with the retrieved values and add it to the array
            const ewastebin = {
                image,
                iconUrl,
                position,
                title,
                locandpos,
                recycleimage
            };
            ewastebins.push(ewastebin);
        });

   
        return ewastebins;
    },

    async addEwastebindata(data){
        const docRef = await addDoc(collection(db, "Map"),
        data);
        
        if(docRef.id){
          return docRef.id
        }
        else{
          return false
        }
    },

    async updateMap(map) {
        const docRef = doc(db, "map", map.mId);
        if(map.rId){
          delete map.mId;
        }
        const docSnap = await updateDoc(docRef, map);
    }
      
};

export default Ewastebinmarker;

