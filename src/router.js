import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import Contact from './views/Contact'
import Course from './views/Course'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/course/:id',
      name: 'Course',
      component: Course
    }
  ]
})
