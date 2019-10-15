import axios from 'axios'
import router from './../../router'

const state = {
    userCourses: [],
    universityCourses: [],
    specificCourse: [],
};

const getters = {
    getUniversityCourses: (state) => {
        return state.universityCourses;
    },
    getCourse: (state) => {
        return state.specificCourse;
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
    getSpecificCourse({commit}, course){
        axios
            .get(`http://127.0.0.1:8000/api${course}`)
            .then((response) => {
                commit('SET_SPECIFIC', response.data)
            })
    }
 };

const mutations = {
    SET_SPECIFIC(state, specificCourse){
        state.specificCourse = specificCourse;
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