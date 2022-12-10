<template>
    <div class="container col-xxl-8 px-4 py-5">
    
        <!--Recipe Grid-->
        <div class="row" v-if="recipes">
            <h1 class="fw-bold">{{recipes.title}}</h1>
            <hr class="hr hr-blurry pb-5 mb-5" />
            <!--Adding a recipe-->
            <img class="" :src="recipes.image" />
            
            <div class="col-sm-6 pb-3">
                <div class="card h-100">
                    <img class="card-img-top" :src="recipes.image" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{recipes.title}}</h5>
                        <h6 class="card-subtitle text-muted fw-bold pb-3">Ready in {{recipes.readyInMinutes}} minutes</h6>
                        <p class="card-text">{{recipes.servings}} {{recipes.servings > 1 ? 'servings' : 'serving'}}</p>
                        <p class="card-text">{{recipes.summary}}</p>
                        <ul>
                          <li v-for="ingredient in recipes.extendedIngredients" :key="ingredient.id">
                            {{ingredient.original}}
                          </li>
                        </ul>
                        <p>{{recipes.instructions}}</p>
                        <!--<a :href="recipe.spoonacularSourceUrl" target="_blank" class="btn btn-dark">View Recipe</a>-->
                    </div>
                </div>
            </div>


         </div>
    
      </div>
      </template>
      
      
      <script>
      import router from '../router'
      import axios from 'axios';
      import randomRecipes from '../recipes/random.json'
      
      
      export default {
        name: 'RecipesDetail',
        data () {
          return {
            recipes: randomRecipes.recipes
          }
        },
        
        mounted() {
          this.getUser();


        },
         
    
        methods: {
          
          getUser() {
            if (localStorage.getItem("isAuthenticates")
            && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
              this.validUserName = JSON.parse(localStorage.getItem("log_user"));
            }
          }
    
        }
    
          
    
    
        }
      
      </script>
      