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
            .then((response) => {
                console.log(response.data.access_token)
                commit('SET_USER', response.data.access_token);
                localStorage.setItem('accessToken', response.data.access_token);
                console.log(localStorage);
                if(localStorage.accessToken){
                    router.push('/home');
                }    
            })
            .catch((error) => {
                commit('SET_ERROR', true);
            })

    },
    userLogout({commit}){
        localStorage.clear();
        commit('SET_USER', '');
    }
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