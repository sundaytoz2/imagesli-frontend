import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ImageCompView from '@/views/tools/ImageCompView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tools',
      children: [
        {
          path: 'imgcmp',
          component: ImageCompView
        }
      ]
    }
  ]
})

export default router
