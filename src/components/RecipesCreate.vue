<template>
<div class="h-100">
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card">
          <div class="row">
            
            <div class="">
              <div class="card-body p-4 p-lg-5 text-black">
                <form>
                  <!--Heading-->
                  <div class="mb-3 pb-1 text-center">
                    <h1 class="fw-bold mb-0">{{pageTitle}}</h1>
                  </div>

                  <!--Form input controls-->
                  <div class="form-outline mb-4">
                    <label class="form-label">Title</label>
                    <input v-model="recipe.title" type="text" class="form-control form-control-lg"/>
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label">Image</label>
                    <input v-model="recipe.image_url" type="url" class="form-control form-control-lg">
                  </div>
                  
                  <div class="form-outline mb-4">
                    <label class="form-label">Ready In Minutes</label>
                    <input v-model="recipe.ready_in_minutes" type="number" class="form-control form-control-lg">
                  </div>
                  
                  <div class="form-outline mb-4">
                    <label class="form-label">Servings</label>
                    <input v-model="recipe.servings" type="number" class="form-control form-control-lg">
                  </div> 
                  
                  <div class="form-outline mb-4">
                    <label class="form-label">Ingredients</label>
                    <input v-model="recipe.ingredients" type="text" class="form-control form-control-lg">
                  </div>
                  
                  <div class="form-outline mb-4">
                    <label class="form-label">Instructions</label>
                    <input v-model="recipe.instructions" type="text" class="form-control form-control-lg">
                  </div>
                  
                  

                  <!--login button and forgot password link-->
                  <div class="d-grid gap-2 pt-1 text-center">
                    <div v-if="!isUpdate" type="button" class="btn btn-dark" @click="createRecipe">Save</div>
                    <div v-if="isUpdate" type="button" class="btn btn-dark" @click="updateRecipe">Update</div>
                    <div type="button" class="btn btn-light" @click="cancelOperation">Cancel</div>   
                  </div>
                  
        
                </form>
              
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    <!--<div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class=" col align-items-center">
          <div class="row align-items-center justify-content-center">
            <div class="col col-12 col-sm-10 col-md-10 col-lg-6">
              <div class="alert alert-danger shadow" role="alert"
              v-if="showMsg === 'error'">
                Please verify Recipe Information
              </div>
            </div>
          </div>


          <div class="row align-items-center justify-content-center">
            <div class="col col-12 col-sm-10 col-md-10 col-lg-6 align-items-center">
              <div class="card">
                <div class="card-header">{{pageTitle}}</div>
                <div class="card-body">
                  <form ref="form">
                    <div class="container-fluid">
  
  
                      <div class="form-group row justify-content-around py-2">
                        <label class="col-4">Title</label>
                        <div class="col col-8">
                          <input v-model="recipe.title" type="text" class="form-control-lg form-control">
                        </div>
                      </div>
  
  
                      <div class="form-group row justify-content-around py-2">
                        <label class="col-4">Image</label>
                        <div class="col col-8">
                          <input v-model="recipe.image_url" type="url" class="form-control-sm form-control">
                        </div>
                      </div>          
  
  
                      <div class="form-group row justify-content-around py-2">
                        <label class="col-4">Ready In Minutes</label>
                        <div class="col col-8">
                          <input v-model="recipe.ready_in_minutes" type="number" class="form-control-sm form-control">
                        </div>
                      </div>
  
  
                      <div class="form-group row justify-content-around py-2">
                        <label class="col-4">Servings</label>
                        <div class="col col-8">
                          <input v-model="recipe.servings" type="number" class="form-control-sm form-control">
                        </div>
                      </div> 


                      <div class="form-group row justify-content-around py-2">
                        <label class="col-4">Ingredients</label>
                        <div class="col col-8">
                          <input v-model="recipe.ingredients" type="text" class="form-control-sm form-control">
                        </div>
                      </div>

                      <div class="form-group row justify-content-around py-2">
                        <label class="col-4">Instructions</label>
                        <div class="col col-8">
                          <input v-model="recipe.instructions" type="text" class="form-control-sm form-control">
                        </div>
                      </div>
                   
  
                      <div class="row justify-content-around">
                        <div v-if="!isUpdate" type="button" class="btn btn-primary col-4" @click="createRecipe">Save</div>
                        <div v-if="isUpdate" type="button" class="btn btn-primary col-4" @click="updateRecipe">Update</div>
                        <div type="button" class="btn btn-secondary col-4" @click="cancelOperation">Cancel</div>   
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  -->

  </template>
  <script>
    import router from '../router';
    import {APIService} from '../http/APIService';
    const apiService = new APIService();
  
    export default {
      name: 'RecipesCreate',
      components: {},
      data() {
        return {
          showError: false,
          recipe: {},
          pageTitle: "Add New Recipe",
          isUpdate: false,
          showMsg: '',
        };
      },
      methods: {
        createRecipe() {
          apiService.addNewRecipe(this.recipe).then(response => {
            if (response.status === 201) {
              this.recipe = response.data;
              this.showMsg = "";
              router.push('/recipes-list/new');
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
        cancelOperation(){
           router.push("/recipes-list");
        },
        updateRecipe() {
          apiService.updateRecipe(this.recipe).then(response => {
            if (response.status === 200) {
              this.recipe = response.data;
              router.push('/recipes-list/update');
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
        }
      },
      mounted() {
        if (this.$route.params.pk) {
          this.pageTitle = "Edit recipe";
          this.isUpdate = true;
          apiService.getRecipe(this.$route.params.pk).then(response => {
            this.recipe = response.data;
          }).catch(error => {
            if (error.response.status === 401) {
              router.push("/auth");
            }
          });
        }
      },
    }
  </script>
  