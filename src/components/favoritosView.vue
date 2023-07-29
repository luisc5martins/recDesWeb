<script setup>

import { fav, removerItemFavorito } from '@/_data/favoritos.js'
import { livros } from '@/_data/livros.js'
import messageFav from '@/components/messageFav.vue'
import MButton from './MButton.vue';

function formatarPreco(preco) {
    return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

</script>
<template>
    <div class="favoritos">
        <h2>Meus Favoritos</h2>
        <div class="wrap-favoritos">
            <messageFav v-if="fav.itens.length === 0" />
            <div v-else>
                <div class="item-fav" v-for="(itens, index) in fav.itens" :key="index">
                    <div class="info-livro-fav">
                        <div class="imagem-livro-fav">
                            <img :src="item.img" class="capa-livro-fav" />
                        </div>
                        <div class="detalhes-livro-fav">
                            <div>
                                <p>{{ item.title }}</p>
                                <p class="livro-preco-fav">{{ formatarPreco(item.price) }}/un</p>
                            </div>
                            <div>
                                <p>
                                    Quantidade:
                                    <input type="number" v-model="itens.quantidade" @change="atualizaQuantidadeItem(itens)" min="1" />
                                </p>
                                <button @click="removerItemFavorito(item)">&#128465;</button>
                                <p>Total: {{ formatarPreco(item.total) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapButton-fav">
                <m-button @click="limparCarrinho()" texto="Limpar carrinho" />
                <m-button texto="Fechar carrinho" />
                <m-button texto="Favoritos" @click="$router.push({name: 'favs'})"/>
                <m-button texto="Continuar comprando" />
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

.item-favoritos-fav .info-livro-fav {
    display: flex;
    margin-bottom: 10px;
}

.detalhes-livro-fav {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.detalhes-livro-fav p {
    margin: 0;
}

.detalhes-livro-fav div {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.detalhes-livro-fav input[type='number'] {
    width: 50px;
    text-align: center;
    border: none;
    border-bottom: 1px solid rgb(255, 255, 255);
    background-color: transparent;
    margin-left: 10px;
}

.detalhes-livro-fav button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: rgb(255, 255, 255);
    padding: 0;
    margin: 0;
}

.livro-preco-fav {
    margin-left: auto;
}

.icon-capa-livro-fav {
    width: 30px;
    margin-right: 10px;
}

.wrapButton-fav {
    border-radius: 40px;
}
</style>