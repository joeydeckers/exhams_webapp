import axios from 'axios'
import router from './../../router'

const state = {
    userCourses: [],
    universityCourses: [],
    specificCourse: [],
    latestCourses: [],
    searchedCourses:[]
};

const getters = {
    getUniversityCourses: (state) => {
        return state.universityCourses;
    },
    getCourse: (state) => {
        return state.specificCourse;
    },
    getlatestCourses: (state) => {
        return state.latestCourses;
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
                commit('SET_SPECIFIC', response.data);
            })
    },
    getLatestCourses({commit}){
        axios
            .get('http://127.0.0.1:8000/api/course/recent')
            .then((response) => {
                commit('SET_LATEST_COURSES', response.data)
            })
    },
    getSearchedCourses({commit}, university, study){
        axios
            .get(`http://127.0.0.1:8000/api/courses/${university}/${study}`)
            .then((response) => {
                commit('SET_LATEST_COURSES', response.data)
            })
    }
 };

const mutations = {
    SET_LATEST_COURSES(state, latestCourses){
        state.latestCourses = latestCourses;
    },
    SET_SPECIFIC(state, specificCourse){
        state.specificCourse = specificCourse;
    },
    SET_USER_COURSES(state, token){
        state.userToken = token;
    },
    SET_UNIVERSITY_COURSES(state, universityCourses){
        state.universityCourses = universityCourses;
    },
    SET_SEARCHED_COURSES(state, searchedCourses){
        state.searchedCourses = searchedCourses;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}