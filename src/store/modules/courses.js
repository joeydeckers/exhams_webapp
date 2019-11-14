import axios from 'axios'
import router from './../../router'

const state = {
    userCourses: [],
    universityCourses: [],
    specificCourse: [],
    latestCourses: [],
    searchedCourses:[],
    requestedCourses: []
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
    },
    getSearchedCourses: (state) =>{
        return state.searchedCourses;
    },
    getAllUserCourses: (state)=> {
        return state.userCourses;
    },
    getAllRequestedCourses: (state) => {
        return state.requestedCourses;
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
    loadSearchedCourses({commit}, courseInfo){
        axios
            .get(`http://127.0.0.1:8000/api/courses/${courseInfo.university}/${courseInfo.study}`)
            .then((response) => {
                commit('SET_SEARCHED_COURSES', response.data)
            })
    },
    getUserCourses({commit}, id){
        axios
            .get(`http://127.0.0.1:8000/api/user/${id.id}/courses`)
            .then((response) => {
                commit('SET_USER_COURSES', response.data)
            })
    },
    getAllRequestedCourses({commit}, university){
        axios
            .get(`http://127.0.0.1:8000/api/getrequestedcourses/${university}`)
            .then((response) => {
                console.log(response.data);
                commit('SET_REQUESTED_COURSES', response.data)
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
    },
    SET_USER_COURSES(state, userCourses){
        state.userCourses = userCourses
    },
    SET_REQUESTED_COURSES(state, requestedCourses){
        state.requestedCourses = requestedCourses;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}