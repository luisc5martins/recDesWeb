import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import favoritos from '../components/favoritos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/favoritos',
      name: 'favs',
      component: favoritos
    }
  ]
})

export default router