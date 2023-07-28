import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/favoritos',
      name: 'favoritos',
      component: favoritos
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router