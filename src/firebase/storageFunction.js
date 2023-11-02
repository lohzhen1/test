import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import productsTable from "./productsTable";
import rewardsTable from "./rewardsTable";
import Ewastebinmarker from "./Ewastebinmarker";


const storage = getStorage();

const storageFunction = {
    async uploadImage(file, id) {
        const storageRef = ref(storage, 'images/' + id);

        uploadBytes(storageRef, file).then((snapshot) => {
            //console.log(snapshot.ref)
        });
    },
    
    async retrieveLink(product) {
        getDownloadURL(ref(storage, 'images/' + product.pId))
        .then( (url) => {
            product.image = url;
            //console.log(url)
            productsTable.updateProduct(product).then( () => {
                return true
            })
        })
        .catch((error) => {

        });
    },
    async Link(product) {
        
    },
    async uploadAndSaveImage(file, product, pId) {
        const storageRef = ref(storage, 'images/' + pId);

        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(ref(storage, 'images/' + pId))
                .then( (url) => {
                    product.image = url;
                    product.pId = pId;
                    productsTable.updateProduct(product).then( () => {
                        return true
                    })
                })
                .catch((error) => {

                });
        });
    },


    async uploadAndSaveImageMap(file, map, mId) {
        const storageRef = ref(storage, 'images/' + mId);

        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(ref(storage, 'images/' + mId))
                .then( (url) => {
                    map.image = url;
                    map.mId = mId;  
                    Ewastebinmarker.updateMap(map).then ( () => {
                        return true
                    })     
                })
                .catch((error) => {

                });
        });
    },

    

    

    async uploadAndSaveImageRewards(file, reward, rId) {
        const storageRef = ref(storage, 'images/' + rId);

        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(ref(storage, 'images/' + rId))
                .then( (url) => {
                    reward.image = url;
                    reward.rId = rId;
                    rewardsTable.updateReward(reward).then( () => {
                        return true
                    })
                })
                .catch((error) => {

                });
        });
    },

    


    
}

export default storageFunction;