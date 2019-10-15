import axios from 'axios'
import router from './../../router'

const state = {
    userCourses: [],
    universityCourses: []
};

const getters = {
    // getUserToken:(state) =>{
    //     return state.userToken;
    // },
    // getError:(state) =>{
    //     return state.error;
    // }
    getUniversityCourses: (state) => {
        return state.universityCourses;
    }
};

const actions = {
    getCoursesByUniversity ({commit}, university){
        axios
            .get(`http://127.0.0.1:8000/api/courses/getcoursesbyschool/${university}`)
            .then((response) => {
                commit('SET_UNIVERSITY_COURSES', response.data)
            })
            .catch((error) => {
                commit('SET_ERROR', true);
            })

    },
 };

const mutations = {
    SET_RECIPES(state, recipes){
        state.recipes = recipes;
    },
    SET_USER_COURSES(state, token){
        state.userToken = token;
    },
    SET_UNIVERSITY_COURSES(state, universityCourses){
        state.universityCourses = universityCourses;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}