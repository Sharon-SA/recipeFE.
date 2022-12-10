import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';
/*'http://127.0.0.1:8000';'https://recipe.pythonanywhere.com'*/

export class APIService {
    constructor() {

    }

    getRecipe(param_pk) {
        const url = `${API_URL}/api/recipe/${param_pk}`;
        let jwtToken = localStorage.getItem('token');
        console.log(":::jwtToken:::::"+jwtToken);
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
    }

    getRecipeList() {
        const url = `${API_URL}/api/recipe/`;
        let jwtToken = localStorage.getItem('token');
        console.log(":::jwtToken:::::"+jwtToken);
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.get(url, {headers: headers});
    
    }

    addNewRecipe(recipe){
        const url = `${API_URL}/api/recipe/`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.post(url, recipe, {headers: headers});
    }

    updateRecipe(recipe){
        const url = `${API_URL}/api/recipe/${recipe.pk}`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.put(url, recipe, {headers: headers});
      }
    
    deleteRecipe(recipe_Pk){
        const url = `${API_URL}/api/recipe/${recipe_Pk}`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.delete(url, {headers: headers});
    }

     
    getCategory(param_pk) {
        const url = `${API_URL}/api/category/${param_pk}`;
        let jwtToken = localStorage.getItem('token');
        console.log(":::jwtToken:::::"+jwtToken);
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
    }
      
    getCategoryList() {
        const url = `${API_URL}/api/category`;
        let jwtToken = localStorage.getItem('token');
        console.log(":::jwtToken:::::" + jwtToken);
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.get(url, {headers: headers});
    }
      
    addNewCategory(category){
        const url = `${API_URL}/api/category/`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.post(url, category, {headers: headers});
    }
      
    updateCategory(category){
        const url = `${API_URL}/api/category/${category.pk}`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.put(url, category, {headers: headers});
    }
      
    deleteCategory(category_Pk){
        const url = `${API_URL}/api/category/${category_Pk}`;
        let jwtToken = localStorage.getItem('token');
        const headers = {Authorization: `jwt ${jwtToken}`};
        return axios.delete(url, {headers: headers});
    }

    authenticateLogin(credentials) {
        const url = `${API_URL}/auth/`;
        return axios.post(url, credentials);
    }
    
    registerUser(credentials) {
        const url = `${API_URL}/register/`;
        credentials.customusername = credentials.username
        return axios.post(url, credentials);
    }
}

