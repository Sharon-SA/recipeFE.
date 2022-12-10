import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'
import Register from '@/components/Register.vue'
import RecipesList from '@/components/RecipesList.vue'
import RecipesDetail from '@/components/RecipesDetail.vue'
import CategoryList from '@/components/CategoryList.vue'
import AmericanRecipes from '@/components/AmericanRecipes.vue'
import PopularRecipes from '@/components/PopularRecipes.vue'
import HealthyRecipes from '@/components/HealthyRecipes.vue'
import RandomRecipes from '@/components/RandomRecipes.vue'
import ChineseRecipes from '@/components/ChineseRecipes.vue'
import EuropeanRecipes from '@/components/EuropeanRecipes.vue'
import GreekRecipes from '@/components/GreekRecipes.vue'
import IndianRecipes from '@/components/IndianRecipes.vue'
import ItalianRecipes from '@/components/ItalianRecipes.vue'
import KoreanRecipes from '@/components/KoreanRecipes.vue'
import MexicanRecipes from '@/components/MexicanRecipes.vue'
import BreakfastRecipes from '@/components/BreakfastRecipes.vue'
import MainRecipes from '@/components/MainRecipes.vue'
import SideRecipes from '@/components/SideRecipes.vue'
import DessertRecipes from '@/components/DessertRecipes.vue'
import AppetizerRecipes from '@/components/AppetizerRecipes.vue'
import SaladRecipes from '@/components/SaladRecipes.vue'
import GlutenRecipes from '@/components/GlutenRecipes.vue'
import KetogenicRecipes from '@/components/KetogenicRecipes.vue'
import VegetarianRecipes from '@/components/VegetarianRecipes.vue'
import PescetarianRecipes from '@/components/PescetarianRecipes.vue'
import BrowseRecipes from '@/components/BrowseRecipes.vue'
import FavoriteRecipes from '@/components/FavoriteRecipes.vue'

//import RecipeList from '@/components/RecipeList'
import RecipesCreate from '@/components/RecipesCreate'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  },
  {
    path:'/favorite',
    name: 'FavoriteRecipes',
    component: FavoriteRecipes
  },
  {
    path: '/recipes-list/',
    name: 'RecipesList',
    component: RecipesList
  },
  {
    path: '/recipes-list/:msg',
    name: 'RecipesUpdatedList',
    component: RecipesList
  },
  {
    path: '/recipes-create/',
    name: 'RecipesCreate',
    component: RecipesCreate
  },
  {
    path: '/recipes-create/:pk',
    name: 'RecipesUpdate',
    component: RecipesCreate
  },
  {
    path: '/popular-recipes/',
    name: 'PopularRecipes',
    component: PopularRecipes
  },
  {
    path: '/healthy-recipes/',
    name: 'HealthyRecipes',
    component: HealthyRecipes
  },
  {
    path: '/random-recipes/',
    name: 'RandomRecipes',
    component: RandomRecipes
  },
  {
    path: '/american-recipes/',
    name: 'AmericanRecipes',
    component: AmericanRecipes
  },
  {
    path: '/chinese-recipes/',
    name: 'ChineseRecipes',
    component: ChineseRecipes
  },
  {
    path: '/european-recipes/',
    name: 'EuropeanRecipes',
    component: EuropeanRecipes
  },
  {
    path: '/greek-recipes/',
    name: 'GreekRecipes',
    component: GreekRecipes
  },
  {
    path: '/indian-recipes/',
    name: 'IndianRecipes',
    component: IndianRecipes
  },
  {
    path: '/italian-recipes/',
    name: 'ItalianRecipes',
    component: ItalianRecipes
  },
  {
    path: '/korean-recipes/',
    name: 'KoreanRecipes',
    component: KoreanRecipes
  },
  {
    path: '/mexican-recipes/',
    name: 'MexicanRecipes',
    component: MexicanRecipes
  },
  {
    path: '/breakfast-recipes/',
    name: 'BreakfastRecipes',
    component: BreakfastRecipes
  },
  {
    path: '/main-recipes/',
    name: 'MainRecipes',
    component: MainRecipes
  },
  {
    path: '/side-recipes/',
    name: 'SideRecipes',
    component: SideRecipes
  },
  {
    path: '/dessert-recipes/',
    name: 'DessertRecipes',
    component: DessertRecipes
  },
  {
    path: '/appetizer-recipes/',
    name: 'AppetizerRecipes',
    component: AppetizerRecipes
  },
  {
    path: '/salad-recipes/',
    name: 'SaladRecipes',
    component: SaladRecipes
  },
  {
    path: '/gluten-recipes/',
    name: 'GlutenRecipes',
    component: GlutenRecipes
  },
  {
    path: '/ketogenic-recipes/',
    name: 'KetogenicRecipes',
    component: KetogenicRecipes
  },
  {
    path: '/vegetarian-recipes/',
    name: 'VegetarianRecipes',
    component: VegetarianRecipes
  },
  {
    path: '/pescetarian-recipes/',
    name: 'PescetarianRecipes',
    component: PescetarianRecipes
  },


  {
    path: '/recipes-detail/:pk',
    name: 'RecipesDetail',
    component: RecipesDetail
  },

  {
    path: '/browse-recipes/',
    name: 'BrowseRecipes',
    component: BrowseRecipes
  },

  {
    path: '/category-list',
    name: 'CategoryList',
    component: CategoryList
  },
  {
    path: '/category-list/:msg',
    name: 'CategoryUpdatedList',
    component: CategoryList
  },
  /*{
    path: '/category-create',
    name: 'CategoryCreate',
    component: CategoryCreate
  },
  {
    path: '/category-create/:pk',
    name: 'CategoryUpdate',
    component: CategoryCreate
  }*/

 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
