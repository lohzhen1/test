import { createStore } from 'vuex';
import userTable from '../firebase/userTable.js'
import cartTable from '../firebase/cartTable.js';
import router from '../router/index'
//Firebase imports
import { auth } from '../firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

const store = createStore({
    state: {
        //The user state will initially be null. After login, this state will be updated
        user: {
            loggedIn: false,
            data: {role: 'visitor'},
            cart: []
          }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
          state.user.loggedIn = value;
        },
        SET_USER(state, data) {
          state.user.data = data;
          sessionStorage.setItem("user", JSON.stringify(state.user))
          if(state.user.data.uid){
            cartTable.getCart(state.user.data.uid).then(d => {
                sessionStorage.setItem("cart", JSON.stringify(d))
            });
          }
          if(data.role == 'admin'){
            router.push({path: '/Approveimage'})
          }
        //   else if(data.role == 'user'){
        //     router.push({path: '/'})
        //   }
        //   else {
        //     router.push({path: '/'})
        //   }
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    actions: {
        async register(context, { email, password, name}){
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user)
                response.user.updateProfile({displayName: name})
            } else {
                throw new Error('Unable to register user')
            }
        },
  
        async logIn(context, { email, password }){
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (response) {
                context.commit('SET_USER', response.user)
            } else {
                throw new Error('login failed')
            }
        },
  
        async logOut(context){
            await signOut(auth)
            sessionStorage.removeItem("user")
            sessionStorage.removeItem("cart")
            context.commit('SET_USER', {role: 'visitor'})
        },
    
        async fetchUser(context ,user) {
            context.commit("SET_LOGGED_IN", user !== null);
            if (user) {
            userTable.getUser(user.uid)
            .then(d => {
                d.email = user.email;
                d.uid = user.uid;
                context.commit("SET_USER", 
                    d
                );
            });

            } 
            else {
                context.commit("SET_USER", {role: 'visitor'});
            }
        }
    }
})

// export the store
export default store