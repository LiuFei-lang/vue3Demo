import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cs from '../views/cs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cs',
    name: 'cs',
    component: Cs,
    children:[
      {
        path:"News",
        name:"News",
        component:()=>import("../views/HomeRouterPages/news.vue")
      },
      {
        path:"Message",
        name:"Message",
        component:()=>import("../views/HomeRouterPages/message.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
