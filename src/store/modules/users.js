import axios from 'axios'
import router from './../../router'

const state = {
    userToken: localStorage.getItem('accessToken') || '',
    userInfo:  localStorage.getItem('userInfo') || '',
    error: false
};

const getters = {
    getUserToken:(state) =>{
        return state.userToken;
    },
    getError:(state) =>{
        return state.error;
    },
    getUserInfo:(state) =>{
        return state.userInfo;
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
                console.log(response);
                commit('SET_USER', response.data.access_token);
                commit('SET_USER_INFO', response.data.user);
                localStorage.setItem('userInfo', JSON.stringify(response.data.user));
                localStorage.setItem('accessToken', response.data.access_token);
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
    },
    userRegister({commit}, user){
        axios
        .post("http://127.0.0.1:8000/api/register",{
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
            name: user.name,
            school: user.school,
            study: user.study,
            rating: user.rating,
            gender: user.gender,
            birthdate: user.birthdate,
            course_ids: '[]'
        })
        .then((response) => {
            commit('SET_USER', response.data.access_token);
            commit('SET_USER_INFO', response.data.user);
            localStorage.setItem('userInfo', response.data.user);
            localStorage.setItem('accessToken', response.data.access_token);
            if(localStorage.accessToken){
               // router.push('/home');
            }    
        })
        .catch((error) => {
            commit('SET_ERROR', true);
        })
    }
 };

const mutations = {
    SET_RECIPES(state, recipes){
        state.recipes = recipes;
    },
    SET_USER(state, token){
        state.userToken = token;
    },
    SET_USER_INFO(state, user){
        state.userInfo = user;
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