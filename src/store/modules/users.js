import axios from 'axios'

const state = {
    recipes: [],
    userToken: ''
};

const getters = {
    getAllRecipes:(state) =>{
        return state.recipes;
    },
    getSpecificRecipe(state){
        return projectName => state.items.filter(item => {
            return item.name === projectName;
        })
    }
};

const actions = {
    // getRecipes ({commit}){
    //     axios
    //         .post("http://127.0.0.1:8000/api/login", {headers: { 'content-type': 'application/json' }})
    //         .then(r => r.data)
    //         .then(recipes => {
    //             commit('SET_RECIPES', recipes)
    //         })
    // },
    async userLogin: ({commit}, payLoad) => {
        return axios.post('/login', payLoad).then((response) => {
          commit('SET_USER', response.data.userToken)
        }, (err) => {
          console.log(err)
        })
      },
};

const mutations = {
    SET_RECIPES(state, recipes){
        state.recipes = recipes;
    },
    SET_USER(state, token){
        state.userToken = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}