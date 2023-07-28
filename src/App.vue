<script setup>

import ListagemLivros from "@/components/ListagemLivros.vue"
import MeuCarrinho from './components/MeuCarrinho.vue';

</script>

<template>
  <div class="cabecalho">
    <img src="cabecalho.png" alt="">
  </div>
  <div class="container-geral">
    <listagem-livros />
    <meu-carrinho />
  </div>
</template>

<style scoped>
.container-geral {
  display: grid;
  grid-template-rows: 3fr 1fr;
  background-color: rgb(255, 255, 255)
}

.h1 {
  background-color: rgb(255, 255, 255);
}

.cabecalho {
  margin-left: 30%;
}
</style>
