import { ref } from 'vue'

let fav = ref({
  itens: [],
  valor: 0
})

function atualizaQuantidadeItem(item) {
  fav.value.valor -= item.valor
  item.valor = item.price * item.quantidade
  fav.value.valor += item.valor
}

  function removerItemFavorito(item) {
    const index = fav.value.itens.findIndex((i) => i.id === item.id)
    fav.value.itens.splice(index, 1)
  }
  
  function adicionarAoFavorito(livro) {
    const index = fav.value.itens.findIndex((item) => item.id === livro.id)
    if (index === -1) {
      fav.value.itens.push({
        ...livro
      })
    } else {
      fav.value.itens[index].quantidade++
    }
  }
  
  function limparFavorito() {
    fav.value.itens = [];
  }
  function formatarPrecoFav(preco) {
    return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
  
  export { fav, atualizaQuantidadeItem, removerItemFavorito, adicionarAoFavorito, limparFavorito, formatarPrecoFav }