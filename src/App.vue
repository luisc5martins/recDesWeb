<script setup>

import { RouterView } from "vue-router";
import ListagemLivros from "@/components/ListagemLivros.vue";
import MeuCarrinho from './components/MeuCarrinho.vue';

</script>

<template>
  <div class="cabecalho">
    <img src="cabecalho.png" alt="">
  </div>
  <div class="container-geral">
    <router-view />
  </div>
</template>

<style scoped>
.container-geral {
  display: grid;
  grid-template-rows: 3fr 1fr;
  background-color: rgb(0, 0, 0)
}

.h1 {
  background-color: rgb(255, 255, 255);
}

.cabecalho {
  padding-left: 30%;
  background-color: black;
}

</style>
