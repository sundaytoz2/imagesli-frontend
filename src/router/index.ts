import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ImageCompView from '@/views/tools/ImageCompView.vue'
import ConvertView from '@/views/tools/ConvertView.vue'

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
          name: 'imagecompare',
          component: ImageCompView
        },
        {
          path: 'convert',
          name: 'convert',
          component: ConvertView
        }
      ]
    }
  ]
})

export default router
