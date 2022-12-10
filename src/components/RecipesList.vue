<template>
  <div class="container col-xxl-8 px-4 py-5">
      <!--Welcome Title -->
      <div class="row">
        <div class="justify-content-center">
          
          <div class="col-sm-6 pb-3">
              <div class="alert alert-success"
                   v-if="showMsg === 'new'"
                   :value="true">
                  New recipe has been added.
              </div>
              <div class="alert alert-success"
                   v-if="showMsg === 'update'"
                   :value="true">
                  Recipe information has been updated.
              </div>
              <div class="alert alert-success"
                   v-if="showMsg === 'deleted'"
                   :value="true">
                  Selected recipe has been deleted.
              </div>
          </div>
      </div>


      <h1 class="fw-bold">User Recipes</h1>
      <hr class="hr hr-blurry" />
      <button type="button" class="btn btn-dark mb-5" @click="addNewRecipe">Add New Recipe</button>
      <!--Data Cards-->
      <div class="col-sm-6 mb-3" v-for="recipe in recipes" :key="recipe.pk">
        <div class="card h-100">
            <img class="card-img-top" :src="recipe.image_url" style="width:auto;height:350px;"/>
            <div class="card-body">
                <h5 class="card-title fw-bold">{{recipe.title}}</h5>
                <h6 class="card-subtitle text-muted fw-bold pb-3">Ready in {{recipe.ready_in_minutes}} minutes</h6>
                <p class="card-text">{{recipe.servings}} {{recipe.servings > 1 ? 'servings' : 'serving'}}</p>
                <p class="card-text"><span class="fw-bold">Ingredients:</span> {{recipe.ingredients}}</p>
                <p class="card-text"><span class="fw-bold">Instructions:</span> {{recipe.instructions}}</p>
                <div class="btn-group">
                    <button @click="updateRecipe(recipe)" style="background-color: transparent; padding: 0;">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button @click="deleteRecipe(recipe)" style="background-color: transparent; padding: 0;">
                        <i @click="deleteRecipe" class="bi bi-trash3-fill"></i>
                    </button>
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
      name: "RecipesList",
      data: () => ({
          recipes: [],
          validUserName: "Guest",
          recipesSize: 0,
          showMsg: '',
          isMobile: false,

      }),
      mounted() {
          this.getRecipes();
          this.showMessages();
      },
      methods: {
          onResize() {
              if (window.innerWidth > 600)
                  this.isMobile = false;
              else
                  this.isMobile = true;
          },
          showMessages(){
              console.log(this.$route.params.msg)
              if (this.$route.params.msg) {
                  this.showMsg = this.$route.params.msg;
              }
          },
          getRecipes() {
              apiService.getRecipeList().then(response => {
                  this.recipes = response.data.data;
                  this.recipesSize = this.recipes.length;
                  if (localStorage.getItem("isAuthenticates")
                      && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
                      this.validUserName = JSON.parse(localStorage.getItem("log_user"));
                  }
              }).catch(error => {
                  if (error.response.status === 401) {
                      localStorage.removeItem('isAuthenticates');
                      localStorage.removeItem('log_user');
                      localStorage.removeItem('token');
                      router.push("/auth");
                  }
              });
          },
          addNewRecipe() {
              if (localStorage.getItem("isAuthenticates")
                  && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
                  router.push('/recipes-create');
              } else {
                  router.push("/auth");
              }
          },
          updateRecipe(recipe) {
              router.push('/recipes-create/' + recipe.pk);
          },
          deleteRecipe(recipe) {
              if(confirm("Do you really want to delete?")) {
                  apiService.deleteRecipe(recipe.pk).then(response => {
                      if (response.status === 204) {
                          router.push('/recipes-list/deleted/')
                          this.getRecipes()
                      }
                  }).catch(error => {
                      if (error.response.status === 401) {
                          localStorage.removeItem('isAuthenticates');
                          localStorage.removeItem('log_user');
                          localStorage.removeItem('token');
                          router.push("/auth");
                      }
                  });
              }
          }
      }
  };
</script>
