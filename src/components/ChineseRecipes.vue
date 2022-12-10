<template>
    <div class="container col-xxl-8 px-4 py-5">
        
        <!--Recipe Grid-->
        <div class="row">
            
            <h1 class="fw-bold">Chinese Recipes</h1>
            <hr class="hr hr-blurry pb-5 mb-5" />
            <!--Adding a recipe-->
            <div class="col-sm-6 pb-3" v-for="recipe in recipes" :key="recipe.id" >
                <div class="card h-100">
                    <img class="card-img-top" :src="recipe.image" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{recipe.title}}</h5>
                        <h6 class="card-subtitle text-muted fw-bold pb-3">Ready in {{recipe.readyInMinutes}} minutes</h6>
                        <p class="card-text">{{recipe.servings}} {{recipe.servings > 1 ? 'servings' : 'serving'}}</p>
                        <a :href="recipe.spoonacularSourceUrl" target="_blank" class="btn btn-dark">View Recipe</a>
                    </div>
                </div>


            </div>


         </div>
    
      </div>
      </template>
      
      
      <script>
      import router from '../router'
      import axios from 'axios';
      import chineseRecipes from '../recipes/chinese.json'
      
      /*const url = "https://api.spoonacular.com/recipes/random?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeNutrition=true&number=100";
      */
    
      export default {
        name: 'ChineseRecipes',
        data () {
          return {
            recipes: chineseRecipes.recipes
          }
        },
        mounted() {
          this.getUser();
        },
    
        methods: {
          viewRecipes(recipe) {
            router.push('/recipes-detail/' + recipe.id);
          },
          
          getUser() {
            if (localStorage.getItem("isAuthenticates")
            && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
              this.validUserName = JSON.parse(localStorage.getItem("log_user"));
            }
          }
    
        }
    

    
        }
      
      </script>
      