import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    { path: '/:pathMatch(.*)*',
      component: () => import('../FoodTruck/shared/page-not-found.component.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../FoodTruck/public/home.component.vue')
    },
    {
      path: '/popular-post',
      name: 'popular-post',
      component: () => import('../FoodTruck/publishing/popular-posts.component.vue')
    },
    {
      path: '/our-post',
      name: 'our-post',
      component: () => import('../FoodTruck/publishing/our-posts.component.vue')
    }
    ,
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../FoodTruck/publishing/post.component.vue')
    }
  ]
})

export default router
