<script setup>
import { ref } from "vue";

import { carrinho, removerItemCarrinho, atualizaQuantidadeItem, } from "@/_data/carrinho.js";
import messageCompra from "@/components/messageCompra.vue";
import MButton from "../components/MButton.vue";

function formatarPreco(preco) {
  return "R$ " + preco.toFixed(2).replace(".", ",");
}

const nome = ref("");
const email = ref("");
const endereco = ref("");
const numCasa = ref("");
const bairro = ref("");
const cidade = ref("");
const estado = ref("");
const cep = ref("");
const formaDePagamento = ref("");
const senha = ref("");
const confirmacao = ref("");
const ok = ref(false);

function validar() {
  if (senha.value === confirmacao.value) {
    return true;
  } else {
    return false;
  }
}
</script>

<template>
  <div class="fechamentoCompra">
    <h2>Pagamento:</h2>
    <div class="wrap-compra">
      <messageCompra v-if="carrinho.itens.length === 0" />
      <div v-else>
        <div
          class="item-compra"
          v-for="(item, index) in carrinho.itens"
          :key="index"
        >
          <div class="info-livro-compra">
            <div class="imagem-livro">
              <img :src="item.img" class="icon-capa-livro" />
            </div>
            <div class="detalhes-livro">
              <div>
                <p>{{ item.title }}</p>
                <p class="info-livro-preco">
                  {{ formatarPreco(item.price) }}/un
                </p>
              </div>
              <div>
                <p>
                  Quantidade:
                  <input
                    type="number"
                    v-model="item.quantidade"
                    @change="atualizaQuantidadeItem(item)"
                    min="1"
                  />
                </p>
                <button @click="removerItemCarrinho(item)">&#128465;</button>
                <p>Total: {{ formatarPreco(item.total) }}</p>
                <p class="carrinho-total">
                  Total: {{ formatarPreco(carrinho.total) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <form class="form" @submit.prevent="ok = validar()">
      <div class="centro">
        <p class="carrinho-total">
          Total da compra é: {{ formatarPreco(carrinho.total) }}
        </p>
        <label for="">Nome:</label>
        <input
          type="text"
          v-on:keypress="ok = false"
          v-model="nome"
          required
          placeholder="Digite seu nome"
        />
        <hr />

        <label for="">Email:</label>
        <input
          type="email"
          v-on:keypress="ok = false"
          v-model="email"
          placeholder="Digite seu email"
        />
        <hr />
        <label for="">Endereço:</label>
        <input
          type="text"
          v-on:keypress="ok = false"
          v-model="endereco"
          placeholder="Digite seu endereço"
        />
        <label for="">Número Imóvel:</label>
        <input
          type="text"
          v-on:keypress="ok = false"
          v-model="numCasa"
          placeholder="Digite o número do imóvel"
        />
        <label for="">Bairro:</label>
        <input
          type="text"
          v-on:keypress="ok = false"
          v-model="bairro"
          placeholder="Digite seu bairro"
        />
        <label for="">Cidade:</label>
        <input
          type="text"
          v-on:keypress="ok = false"
          v-model="cidade"
          placeholder="Digite sua cidade"
        />
        <label for="">Estado:</label>
        <input
          type="text"
          v-on:keypress="ok = false"
          v-model="estado"
          placeholder="Digite seu estado"
        />
        <label for="">CEP:</label>
        <input
          type="text"
          v-on:keypress="ok = false"
          v-model="cep"
          placeholder="Digite seu CEP"
        />
        <hr />

        <label for="formaPagamento">Forma de pagamento:</label>
        <select v-on:keypress="ok = false" v-model="formaDePagamento">
          <option value="cartao">Cartão de crédito</option>
          <option value="pix">Pix</option>
          <option value="boleto">Boleto</option>
        </select>
        <hr />
        <label for="">Senha:</label>
        <input
          type="password"
          v-on:keypress="ok = false"
          v-model="senha"
          minlength="6"
          placeholder="Digite sua senha"
        />
        <hr />
        <label for="">Confirmar senha:</label>
        <input
          type="password"
          v-on:keypress="ok = false"
          v-model="confirmacao"
          minlength="6"
          placeholder="Digite sua senha novamente"
        />
        <hr />
        <button class="mostraCompra" type="submit">Mostrar</button>
      </div>
      <div class="wrap-button-compra">
      <MButton @click="removerItemCarrinho()" texto="Limpar carrinho" />
      <MButton @click="$router.push({ name: 'inicio' })" texto="Continuar comprando:" />
    </div>
    </form>
    <div v-if="ok" class="retorno">
      <p>Total da compra é de: {{ formatarPreco(carrinho.total) }}</p>
      <p>O nome digitado é: {{ nome }}</p>
      <p>O email digitado é: {{ email }}</p>
      <p>O endereço digitado é: {{ endereco }}</p>
      <p>A forma de pagamento digitada é: {{ formaDePagamento }}</p>
      <p>A senha digitada é: {{ senha }}</p>
      <p>A confirmação digitada é: {{ confirmacao }}</p>
    </div>
  </div>
</template>
<style scoped>

.retorno {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(255, 255, 255);
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(0, 0, 0);
  margin-left: 10px;
  padding: 5px;
}
.carrinho {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
  color: rgb(255, 255, 255);
}
.wrap-carrinho .carrinho-total {
  position: fixed;
  bottom: 3%;
  font-size: 1.5rem;
  font-weight: bold;
}

.item-carrinho .info-livro {
  display: flex;
  margin-bottom: 50px;
}
.detalhes-livro {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
}
.detalhes-livro p {
  margin: 0;
}
.detalhes-livro div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.detalhes-livro input[type="number"] {
  color: white;
  width: 50px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
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
  width: 150px;
  margin-right: 10px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140vh;
  color: white;
}
.form {
  max-width: 400px;
  padding: 20px;
  padding-right: 33px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(0, 0, 0);
}
.centro {
  margin-bottom: 10px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.baixo {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  display: block;
  margin-bottom: 10px;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: brown;
  color: white;
}
.comp {
  background-color: white;
  border-radius: #ccc 3px;
  color: brown;
}
.body {
  display: auto;
}
.fechamentoCompra h2, p {
  color: white;
  margin: 0px;
}
</style>
