import homeView from '../views/homeView.vue'
import favoritos from '../components/favoritos.vue'
import MeuCarrinho from '../components/MeuCarrinho.vue'
import compraView from '../views/compraView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: homeView
    },
    {
      path: '/favoritos',
      name: 'favs',
      component: favoritos
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: MeuCarrinho
    },
    {
      path: '/finalizaCompra',
      name: 'finalizaCompra',
      component: compraView
    }
  ]
})

export default router