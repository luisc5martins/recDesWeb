<script setup>
import favoritosView from './favoritosView.vue';
import { carrinho, removerItemCarrinho, atualizaQuantidadeItem, limparCarrinho } from '@/_data/carrinho.js'
import MButton from './MButton.vue';
import MMessage from './MMessage.vue';

function formatarPreco(preco) {
    return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

</script>

<template>
    <div class="carrinho">
        <h2>Meu carrinho</h2>
        <div class="wrap-carrinho">
            <MMessage v-if="carrinho.itens.length === 0" />
            <div v-else>
                <p class="carrinho-total">Total: {{ formatarPreco(carrinho.total) }}</p>
                <div class="item-carrinho" v-for="(item, index) in carrinho.itens" :key="index">
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
                                <p>
                                    Quantidade:
                                    <input type="number" v-model="item.quantidade" @change="atualizaQuantidadeItem(item)" min="1" />
                                </p>
                                <button @click="removerItemCarrinho(item)">&#128465;</button>
                                <p>Total: {{ formatarPreco(item.total) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapButton">
                <m-button @click="limparCarrinho()" texto="Limpar carrinho" />
                <m-button texto="Fechar carrinho" />
                <m-button texto="Favoritos" @click="$router.push({name: 'favs'})"/>
                <m-button texto="Continuar comprando" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.carrinho {
    min-width: 20%;
    text-align: center;
}

.wrap-carrinho .carrinho-total {
    position: static;
    bottom: 3%;
    font-size: 1.5rem;
    font-weight: bold;
}

.item-carrinho .info-livro {
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