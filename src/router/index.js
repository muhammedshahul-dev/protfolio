import { createRouter, createWebHistory } from 'vue-router'
import ProtfolioView from '../views/ProtfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProtfolioView',
      component: ProtfolioView,
    },
  ],
})

export default router
