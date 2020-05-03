import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '@/components/Contact';
import AddMovie from '@/components/AddMovie';
import Movie from '@/components/Movie';
import Register from '@/components/Register';
import Login from '@/components/Login';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/movies/add',
    name: 'AddMovie',
    component: AddMovie,
  },
  {
    path: '/movies/:id',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/users/register',
    name: 'Register',
    component: Register,
    },
    {
      path: '/users/login',
      name: 'Login',
      component: Login,
      },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
