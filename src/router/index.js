import homeView from '../views/homeView.vue'
import favoritosView from '../components/favoritosView.vue'
import MeuCarrinho from '../components/MeuCarrinho.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'inicio',
      component: homeView
    },
    {
      path: '/favoritos',
      name: 'favs',
      component: favoritosView
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: MeuCarrinho
    }
  ]
})

export default router