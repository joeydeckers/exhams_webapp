import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Login from './views/Login'
import Contact from './views/Contact'
import Course from './views/Course'
import Home from './views/Home'

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
      path: '/course/:id',
      name: 'Course',
      component: Course
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

const openRoutes = ['Landing', 'Contact', 'Login', 'Course'];

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