<script setup>

import { RouterView } from "vue-router";
import ListagemLivros from "@/components/ListagemLivros.vue";
import MeuCarrinho from './components/MeuCarrinho.vue';

</script>

<template>
  <div class="cabecalho">
    <img src="@/img/cabecalho.png" alt="">
  </div>
  <div class="container-geral">
    <router-view />
  </div>
</template>

<style scoped>
.container-geral {
  display: auto;
  background-color: rgb(0, 0, 0);
  display: grid;
  grid-template-rows: 1fr 7fr;
}

.h1 {
  background-color: rgb(255, 255, 255);
}

.cabecalho {
  padding-left: 30%;
  background-color: black;
}

</style>
