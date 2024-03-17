import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChatGPTView from '@/views/ChatGPTView.vue'
import FlowersView from '@/views/FlowersView.vue'
import FindOutFlowerView from '@/views/FindOutFlowerView.vue'
import FlashCardView from '@/views/FlashCardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/poc',
      children: [
        {
          path: 'flowers',
          name: 'flowers',
          component: FlowersView
        },
        {
          path: 'whatflowers',
          name: 'flowers',
          component: FindOutFlowerView
        },
        {
          path: 'flashcard',
          name: 'flashcard',
          component: FlashCardView
        }
      ]
    },
    {
      path: '/clone',
      children: [
        {
          path: 'chatgpt',
          name: 'chatgpt',
          component: ChatGPTView
        }
      ]
    }
  ]
})

export default router
