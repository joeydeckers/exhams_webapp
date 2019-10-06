import axios from 'axios'
import router from './../../router'

const state = {
    userToken: localStorage.getItem('accessToken') || '',
    error: false
};

const getters = {
    getUserToken:(state) =>{
        return state.userToken;
    },
    getError:(state) =>{
        return state.error;
    }
};

const actions = {
    userLogin ({commit}, user){
        axios
            .post("http://127.0.0.1:8000/api/login",{
                email: user.email,
                password: user.password
            })
            .then(r => r.data.access_token)
            .catch((error) => {
                //console.log(error.response.data.message);
                commit('SET_ERROR', true);
            })
            .then(token => {
                commit('SET_USER', token);
                localStorage.setItem('accessToken', token);
                console.log(localStorage);
                router.push('course/1');
            })
    },
 };

const mutations = {
    SET_RECIPES(state, recipes){
        state.recipes = recipes;
    },
    SET_USER(state, token){
        state.userToken = token;
    },
    SET_ERROR(state, setError){
        state.error = setError;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}