<script setup>

import messageFav from './messageFav.vue'
import { fav, adicionarAoFavorito, removerItemFavorito, limparFavorito }

</script>
fazer alterações pois os códigos são parecidos
<template>
    <div class="favs">
        <h2>Meus Favoritos</h2>
        <div class="wrap-favoritos">
            <messageFav v-if="favoritos.itens.length === 0" />
            <div v-else>
                <p class="favoritos-total">Total: {{ formatarPreco(favoritos.total) }}</p>
                <div class="item-favoritos" v-for="(item, index) in favoritos.itens" :key="index">
                    <div class="info-livro">
                        <div class="imagem-livro">
                            <img :src="item.img" class="icon-capa-livro" />
                        </div>
                        <div class="detalhes-livro">
                            <div>
                                <p>{{ item.title }}</p>
                                <p class="info-livro-preco">{{ formatarPreco(item.price) }}/un</p>
                            </div>
                            <div>
                                <button @click="removerItemFavorito(item)">&#128465;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.favs {
    min-width: 20%;
    text-align: center;
}

.wrap-favoritos .favoritos-total {
    position: static;
    bottom: 3%;
    font-size: 1.5rem;
    font-weight: bold;
}

.item-favoritos .info-livro {
    display: flex;
    margin-bottom: 10px;
}

.detalhes-livro {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.detalhes-livro p {
    margin: 0;
}

.detalhes-livro div {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.detalhes-livro input[type='number'] {
    width: 50px;
    text-align: center;
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
    background-color: transparent;
    margin-left: 10px;
}

.detalhes-livro button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    padding: 0;
    margin: 0;
}

.info-livro-preco {
    margin-left: auto;
}

.icon-capa-livro {
    width: 30px;
    margin-right: 10px;
}

.wrapButton {
    border-radius: 40px;
}
</style>
