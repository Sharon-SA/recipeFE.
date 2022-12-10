<template>
  <div class="container col-xxl-8 px-4 py-5">
    <!--Recipe Grid--> 
    <div class="row">
      <h1 class="fw-bold">Browse Recipes</h1>
      <hr class="hr hr-blurry pb-5 mb-5" />

      <!--Searching using a cuisine-->
      <div class="pb-3">
        <label class="form-label fw-bold" for="floatingInputGrid">Choose a cuisine</label>
        <select class="form-select form-select-lg mb-3" data-width="auto" aria-label=".form-select-lg" v-model="cuisine">
          <option value="AMERICAN">American</option>
          <option value="CHINESE">Chinese</option>
          <option value="EUROPEAN">European</option>
          <option value="GREEK">Greek</option>
          <option value="INDIAN">Indian</option>
          <option value="ITALIAN">Italian</option>
          <option value="KOREAN">Korean</option>
          <option value="MEXICAN">Mexican</option>
        </select>

        <label class="form-label fw-bold" for="floatingInputGrid">Choose a meal type</label>
        <select class="form-select form-select-lg mb-3" data-width="auto" aria-label=".form-select-lg" v-model="meal">
          <option value="NONE">None</option>
          <option value="BREAKFAST">Breakfast</option>
          <option value="MAIN">Main Course</option>
          <option value="SIDE">Side Dish</option>
          <option value="DESSERT">Dessert</option>
          <option value="APPETIZER">Appetizers</option>
          <option value="SALAD">Salad</option>
        </select>

        <label class="form-label fw-bold" for="floatingInputGrid">Choose a diet</label>
        <select class="form-select form-select-lg mb-3" data-width="auto" aria-label=".form-select-lg" v-model="diet">
          <option value="NONE">None</option>
          <option value="GLUTEN">Gluten Free</option>
          <option value="KETOGENIC">Ketogenic</option>
          <option value="VEGETARIAN">Vegetarian</option>
          <option value="PESCETARIAN">Pescetarian</option>
        </select>

        <label class="form-label fw-bold" for="floatingInputGrid">Choose an intolerance</label>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg" v-model="intolerances">
          <option value="NONE">None</option>
          <option value="DAIRY">Dairy</option>
          <option value="EGG">Egg</option>
          <option value="GLUTEN">Gluten</option>
          <option value="PEANUT">Peanut</option>
          <option value="SEAFOOD">Seafood</option>
        </select>

        <label class="form-label fw-bold" for="floatingInputGrid">Choose one or multiple ingredients by pressing Ctrl</label>
        <select class="form-select form-select-lg" multiple v-model="ingredients">
          <option value="ALMONDS">Almonds</option>
          <option value="APPLE">Apple</option>
          <option value="ANCHOVIES">Anchovies</option>
          <option value="AVOCADO">Avocado</option>
          <option value="BACON">Bacon</option>
          <option value="BROCCOLI">Broccoli</option>
          <option value="BUTTERMILK">Buttermilk</option>
          <option value="TOMATO">Tomato</option>
          <option value="CHEESE">Cheese</option>
          <option value="DATES">Dates</option>
          <option value="EGGPLANT">Eggplant</option>
          <option value="ESCAROLE">Escarole</option>
          <option value="FISH">Fish</option>
          <option value="HAM">Ham</option>
        </select>
        
        <label class="form-label fw-bold pt-3" for="floatingInputGrid">Choose one or multiple ingredients that you want excluded by pressing Ctrl</label>
        <select class="form-select form-select-lg" multiple v-model="excluded">
          <option value="NONE">None</option>
          <option value="CANTALOUPE">Cantaloupe</option>
          <option value="CARROTS">Carrots</option>
          <option value="CELERY">Celery</option>
          <option value="AVOCADO">Avocado</option>
          <option value="BACON">Bacon</option>
          <option value="BROCCOLI">Broccoli</option>
          <option value="BUTTERMILK">Buttermilk</option>
          <option value="TOMATO">Tomato</option>
          <option value="CHEESE">Cheese</option>
        </select>


        <button class="btn btn-lg btn-dark px-4 me-md-2 mt-3 mb-3" type="button" @click="clickSearch">Search Recipes</button>
        <h4 class="fw-bold pt-5 pb-5 mb-5" v-if="searchClicked && results.length != 0">Top Results</h4>

        <!--Search result list-->
        <div class="col-sm-6 pb-3" v-if="results.length != 0">
           <div class="card h-100" v-for="result in results" :key="result.id">
            <img class="card-img-top" :src="result.image">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{result.title}}</h5>
              <h6 class="card-subtitle text-muted fw-bold pb-3">Ready in {{result.readyInMinutes}} minutes</h6>
              <p class="card-text">{{result.servings}} {{result.servings > 1 ? 'servings' : 'serving'}}</p>
              <a :href="result.spoonacularSourceUrl" target="_blank" class="btn btn-dark">View Recipe</a>
            </div>
          </div> 
        </div>


      </div>

    </div>

  </div>


</template>

<script>
export default {
  name: "BrowseRecipes",

  data() {
    return {
      results: [],
      searchClicked: false,
      cuisine: '',
      meal: '',
      diet: '',
      intolerances: '',
      ingredients: '',
      excluded: '',
      apiKey: '5e924fb9651a4f21a55473926cd4a26a'
    };
  },

  mounted() {
    console.log("Component mounted.");
  },

  methods: {
    clickSearch() {
      this.searchClicked = true
      this.getData(this.cuisine)
      this.getData(this.meal)
      this.getData(this.diet)
      this.getData(this.intolerances)
      this.getData(this.ingredients)
      this.getData(this.excluded)
    },
    getData(cuisine) {
      let uri = ''
      this.results = []
      if(cuisine == "AMERICAN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&cuisine=american&addRecipeInformation=true&number=10'
      }
      else if(cuisine == "CHINESE") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&cuisine=chinese&addRecipeInformation=true&number=10'
      }
      else if(cuisine == "EUROPEAN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&cuisine=european&addRecipeInformation=true&number=10'
      }
      else if(cuisine == "GREEK") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&cuisine=greek&addRecipeInformation=true&number=10'
      }
      else if(cuisine == "INDIAN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&cuisine=indian&addRecipeInformation=true&number=10'
      }
      else if(cuisine == "ITALIAN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&cuisine=italian&addRecipeInformation=true&number=10'
      }
      else if(cuisine == "KOREAN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&cuisine=korean&addRecipeInformation=true&number=10'
      }
      else if(cuisine == "MEXICAN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&cuisine=mexican&addRecipeInformation=true&number=10'
      }
      /*else {
        alert("Please choose an option")
      }*/
      
      if(uri != '') {
        fetch(uri)
        .then(response => {
          if(response.ok) {
            response.json()
            .then(response1 => {
              this.results = response1.results 
              if(this.results.length == 0) {
                alert('No listings found.')
              }
            })
          }
        })
        .catch(err => {
          alert("The API is facing issues. Recipe data cannot be retrieved, please try again later" + err)
        })  
      }
    },

    getData(meal) {
      let uri = ''
      this.results = []
      if(meal == "NONE") {
        uri = ''
      }
      else if(meal == "BREAKFAST") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&type=breakfast&addRecipeInformation=true&number=10'
      }
      else if(meal == "MAIN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&type=main&addRecipeInformation=true&number=10'
      }
      else if(meal == "SIDE") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&type=side&addRecipeInformation=true&number=10'
      }
      else if(meal == "DESSERT") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&type=dessert&addRecipeInformation=true&number=10'
      }
      else if(meal == "APPETIZER") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&type=appetizer&addRecipeInformation=true&number=10'
      }
      else if(meal == "SALAD") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&type=salad&addRecipeInformation=true&number=10'
      }
      /*else {
        alert("Please choose an option")
      }*/
      
      if(uri != '') {
        fetch(uri)
        .then(response => {
          if(response.ok) {
            response.json()
            .then(response1 => {
              this.results = response1.results 
              if(this.results.length == 0) {
                alert('No listings found.')
              }
            })
          }
        })
        .catch(err => {
          alert("The API is facing issues. Recipe data cannot be retrieved, please try again later" + err)
        })  
      }
    },


    getData(diet) {
      let uri = ''
      this.results = []
      if(diet == "NONE") {
        uri = ''
      }
      else if(diet == "GLUTEN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&diet=gluten free&addRecipeInformation=true&number=10'
      }
      else if(diet == "KETOGENIC") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&diet=ketogenic&addRecipeInformation=true&number=10'
      }
      else if(diet == "VEGETARIAN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&diet=vegetarian&addRecipeInformation=true&number=10'
      }
      else if(diet == "PESCETARIAN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&diet=pescetarian&addRecipeInformation=true&number=10'
      }
      /*else {
        alert("Please choose an option")
      }*/
      if(uri != '') {
        fetch(uri)
        .then(response => {
          if(response.ok) {
            response.json()
            .then(response1 => {
              this.results = response1.results 
              if(this.results.length == 0) {
                alert('No listings found.')
              }
            })
          }
        })
        .catch(err => {
          alert("The API is facing issues. Recipe data cannot be retrieved, please try again later" + err)
        })  
      }
    },


    getData(intolerances) {
      let uri = ''
      this.results = []
      if(intolerances == "NONE") {
        uri = ''
      }
      else if(intolerances == "DAIRY") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&intolerances=dairy&addRecipeInformation=true&number=10'
      }
      else if(intolerances == "EGG") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&intolerances=egg&addRecipeInformation=true&number=10'
      }
      else if(intolerances == "GLUTEN") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&intolerances=gluten&addRecipeInformation=true&number=10'
      }
      else if(intolerances == "PEANUT") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&intolerances=peanut&addRecipeInformation=true&number=10'
      }
      else if(intolerances == "SEAFOOD") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&intolerances=seafood&addRecipeInformation=true&number=10'
      }
      /*else {
        alert("Please choose an option")
      }*/
      if(uri != '') {
        fetch(uri)
        .then(response => {
          if(response.ok) {
            response.json()
            .then(response1 => {
              this.results = response1.results 
              if(this.results.length == 0) {
                alert('No listings found.')
              }
            })
          }
        })
        .catch(err => {
          alert("The API is facing issues. Recipe data cannot be retrieved, please try again later" + err)
        })  
      }
    },


    getData(ingredients) {
      let uri = ''
      this.results = []
      if(ingredients == "ALMONDS") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=almonds&addRecipeInformation=true&includeIngredients=apple&number=10'
      }
      else if(ingredients == "APPLE") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=apple&addRecipeInformation=true&includeIngredients=apple&number=10'
      }
      else if(ingredients == "ANCHOVIES") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=anchovies&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "AVOCADO") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=avocado&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "BACON") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=bacon&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "BROCCOLI") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=broccoli&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "BUTTERMILK") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=buttermilk&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "TOMATO") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=tomato&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "CHEESE") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=cheese&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "DATES") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=dates&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "EGGPLANT") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=eggplant&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "ESCAROLE") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=escarole&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "FISH") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=fish&addRecipeInformation=true&number=10'
      }
      else if(ingredients == "HAM") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&includeIngredients=ham&addRecipeInformation=true&number=10'
      }
      /*else {
        alert("Please choose an option")
      }*/
      if(uri != '') {
        fetch(uri)
        .then(response => {
          if(response.ok) {
            response.json()
            .then(response1 => {
              this.results = response1.results 
              if(this.results.length == 0) {
                alert('No listings found.')
              }
            })
          }
        })
        .catch(err => {
          alert("The API is facing issues. Recipe data cannot be retrieved, please try again later" + err)
        })  
      }
    },
    getData(excluded) {
      let uri = ''
      this.results = []
      if(excluded == "NONE") {
        uri = ''
      }
      else if(excluded == "CANTALOUPE") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=cantaloupe&addRecipeInformation=true&includeIngredients=apple&number=10'
      }
      else if(excluded == "CARROTS") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=carrots&addRecipeInformation=true&number=10'
      }
      else if(excluded == "CELERY") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=celery&addRecipeInformation=true&number=10'
      }
      else if(excluded == "AVOCADO") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=avocado&addRecipeInformation=true&number=10'
      }
      else if(excluded == "BACON") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=bacon&addRecipeInformation=true&number=10'
      }
      else if(excluded == "BROCCOLI") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=broccoli&addRecipeInformation=true&number=10'
      }
      else if(excluded == "BUTTERMILK") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=buttermilk&addRecipeInformation=true&number=10'
      }
      else if(excluded == "TOMATO") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=tomato&addRecipeInformation=true&number=10'
      }
      else if(excluded == "CHEESE") {
        uri = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=5e924fb9651a4f21a55473926cd4a26a&excludeIngredients=cheese&addRecipeInformation=true&number=10'
      }
      /*else {
        alert("Please choose an option")
      }*/
      if(uri != '') {
        fetch(uri)
        .then(response => {
          if(response.ok) {
            response.json()
            .then(response1 => {
              this.results = response1.results 
              if(this.results.length == 0) {
                alert('No listings found.')
              }
            })
          }
        })
        .catch(err => {
          alert("The API is facing issues. Recipe data cannot be retrieved, please try again later" + err)
        })  
      }
    },

    
    
  },

  

};
</script>
