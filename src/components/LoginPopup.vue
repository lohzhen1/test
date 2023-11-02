<script setup>

</script>
<template>

<div class="container-fluid divContainer">
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal()"></button>
                </div>
                <div class="modal-body">
                    <section>
                    <div class="container-fluid h-custom">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                        <img src="../assets/logo.png">

                        <div class="col">
                            <form action="#" @submit.prevent="Login">

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Email address</label>
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                placeholder="Enter a valid email address" v-model="email" required />
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-3">
                                <label class="form-label" for="form3Example4">Password</label>
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                placeholder="Enter password" v-model="password" required/>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" class="btn btn-primary btn-lg"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;"
                                >Login</button>
                                <!-- <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    class="link-danger">Register</a></p> -->
                            </div>

                            </form>
                        </div>
                        </div>
                    </div>

                </section>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}

.form-control-lg{
    font-size: 1rem;
}

.btn-primary {
    background-color: rgba(37, 53, 38);
    color: white;
    border-color: rgba(37, 53, 38);
}

.divContainer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 200;
    visibility: visible;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal{
    position: fixed;
    margin: 0 auto;
    top: 20%;
    display: block;
    visibility: inherit;
    overflow: auto; /* Enable scroll if needed */


}

</style>

<script>
import store from '../store/index.js'
import router from '../router/index.js'

export default {
  name: "LoginPopupComponent",
  data() {
    return {
        error: "",
        email: "",
        password: ""
    }
  },
  methods: {
    async Login() {
        // var currentRoute = router.currentRoute.value.fullPath;
        // console.log(currentRoute)
      try {
        await store.dispatch('logIn', {
          email: this.email,
          password: this.password
        })
        alert("Login success");

        setTimeout(function () {
            router.push({path: '/'}).then(() => {
                router.go(-1)
            })
        }, 500);
        // router.push({path: currentRoute})
      }
      catch (err) {
        this.error = err.message
        alert("Login unsuccessful: " + this.error);
      }
  },
  closeModal() {
    router.go(-1)
  }
}
};
</script>