import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Login from './views/Login'
import Contact from './views/Contact'
import Course from './views/Course'
import Home from './views/Home'
import AskForCourse from './views/AskForCourse'
import AskForCourseUniversity from './views/AskForCourseUniversity'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/curses/:id',
      name: 'Course',
      component: Course
    },
    {
      path: '/cursus-aanvragen',
      name: 'AskForCourse',
      component: AskForCourse
    },
    {
      path: '/cursus-aanvragen/:university',
      name: 'AskForCourseUniversity',
      component: AskForCourseUniversity
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { 
        requiresAuth: true
      }
    }
  ]
})

const openRoutes = ['Landing', 'Contact', 'Login', 'Course', 'AskForCourse', 'AskForCourseUniversity'];

router.beforeEach((to, from, next) => {
  if(openRoutes.includes(to.name)){
    next()
  }else if(localStorage.getItem('accessToken')){
    next();
  }else{
    next('/login')
  }
})

export default router;