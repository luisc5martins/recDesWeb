<script setup>
import { adicionarAoCarrinho } from "@/_data/carrinho.js"
import MButton from "./MButton.vue";
import { adicionarAoFavorito } from "@/_data/favoritos.js"

const props = defineProps({
    livro: Object
})
function formatarPreco(preco) {
    return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

</script>

<template>
         <div class="card-livro" >
        <div class="card-info-livro">
          <div class="wrap-livro">
            <img :src="props.livro.img" alt="Capa do livro" class="capa-livro" />
          </div>
          <p class="titulo-livro">{{ props.livro.title }}</p>
          <p class="autor-livro">{{ props.livro.author }}</p>
          <p class="preco-livro">{{ formatarPreco(props.livro.price) }}</p>
        </div>
        <div class="card-buttons-livros">
          <MButton @click="adicionarAoCarrinho(props.livro)" texto="Adicionar Carrinho"/>
          <MButton @click="adicionarAoFavorito(props.livro)" texto="Adicionar aos favoritos"/>
        </div>
      </div>     
</template>

<style scoped>

.card-livro {
    margin: 5px 10px;
    padding: 9px;
    background-color: black;
    border-radius: 10px;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    color: white;
    border: 2px;
    border-style: solid;
    border-color: white;
}

.wrap-livro {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    width: 180px;
    height: 270px;
}

.capa-livro {
    width: 90%;
    max-height: 100%;
}

.card-livro p {
    margin: 0;
    margin-bottom: 3px;
    justify-content: space-evenly;
}

.card-livro .titulo-livro {
    font-weight: bold;
    margin-bottom: 5px;
}

.card-buttons-livros {
  width: 117px;
  text-align: center;

}
</style>