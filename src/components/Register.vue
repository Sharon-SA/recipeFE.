<template>
<div class="vh-100">
  <div class="container py-2 h-80">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div v-if="showMsg === 'error'" class="alert alert-danger" role="alert">
                Invalid username or password. Please Try again.
              </div>
              
              <div class="card-body p-4 p-lg-5 text-black">
                <div class="row align-items-center justify-content-center" v-if="loading">
                  <!-- Creating the progress bar -->
                  <div class="progress">
                    <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 75%"
                    >
                  </div>
                </div>
              </div>
              <!-- Input Field Section -->
              <form v-else ref="form">
                <div class="mb-3 pb-1 text-center">
                  <h1 class="fw-bold mb-0">Sign Up</h1>
                </div>
                
                <div class="form-outline mb-4">
                  <label class="form-label">Username</label>
                  <input name="username" v-model="credentials.username" type="text" class="form-control form-control-lg">
                </div>
                
                <div class="form-outline mb-4">
                  <label class="form-label">Password</label>
                  <input v-model="credentials.password" type="password" class="form-control form-control-lg">
                </div>
                
                <div class="form-outline mb-4">
                  <label class="form-label">Re-enter password</label>
                  <input v-model="credentials.password2" type="password" class="form-control form-control-lg">
                </div> 
                
                <div class="form-outline mb-4">
                  <label class="form-label">Email</label>
                  <input v-model="credentials.email" type="email" class="form-control form-control-lg">
                </div>       
                
                <div class="form-outline mb-4">
                  <label class="form-label">First Name</label>
                  <input v-model="credentials.first_name" type="text" class="form-control form-control-lg">
                </div>
                
                <div class="form-outline mb-4">
                  <label class="form-label">Last Name</label>
                  <input v-model="credentials.last_name" type="text" class="form-control form-control-lg">
                </div>
                
                <div class="d-grid gap-2 pt-1 text-center">
                  <button class="btn btn-dark btn-lg btn-block" @click="register">Register</button>
                  <p class="pb-lg-2 py-5">Already have an account? <router-link :to="{name: 'Auth'}" style="color: #393f81;">Login here</router-link></p>
                </div>
              </form>  
            </div>
          </div>
          
          <div class="col-md-6 col-lg-5 d-none d-md-block">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
            alt="login form" class="img-fluid" />
          </div>
        
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

import router from '../router';
import {APIService} from '../http/APIService';
const apiService = new APIService();

export default {
  name: 'Register',

  data: () => ({
    credentials: {},
    password: "",
    repassword: "",
    valid: true,
    showMsg: '',
    loading: false,
    rules: {
      username: [
        v => !!v || "Username is required",
        v => (v && v.length > 3) || "A username must be more than 3 characters long",
        v => /^[a-z0-9_]+$/.test(v) || "A username can only contain letters and digits"
      ],
      password: [
        v => !!v || "Password is required",
        v => (v && v.length > 7) || "The password must be longer than 7 characters"
      ],
      email: [
        v => !!v || "Email is required"
      ],
      repassword: [
        v => (v == this.password) || 'Passwords must match'
      ]
    },
    showPassword: false,
  }),
  methods: {
    register() {
      
     apiService.registerUser(this.credentials).then(response => {
        if (response.status === 201) {
          this.movie = response.data;
          this.showMsg = "";
          router.push('/auth/');
        }else{
          this.showMsg = "error";
        }
      }).catch(error => {
        if (error.response.status === 401) {
          router.push("/auth");
        }else if (error.response.status === 400) {
          this.showMsg = "error";
        }
      });
    },
  },
  computed: {
    passwordConfirmationRule() {
      return (this.password === this.repassword) || 'Password must match'
  }
  }
}
</script>
