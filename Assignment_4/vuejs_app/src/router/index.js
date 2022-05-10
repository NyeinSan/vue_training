import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProfileView from '../views/ProfileView.vue';
import LoginView from '../views/LoginView.vue';
import JobView from '../views/Jobs/JobView.vue';
import JobDetail from '../views/Jobs/JobDetail.vue';
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/job',
    name: 'Job',
    component: JobView
  },
  {
    path: '/jobdetail/:id',
    name: 'JobDetail',
    component: JobDetail,
    props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: "/:catchAll(.*)",
    component:NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/profile') {
    let auth = localStorage.getItem('navguard');
    if (auth) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;