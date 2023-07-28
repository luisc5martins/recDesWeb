import { ref } from 'vue'

let fav = ref({
  itens: []
})
  
  function removerItemFavorito(item) {
    const index = fav.value.itens.findIndex((i) => i.id === item.id)
    fav.value.total -= item.total
    fav.value.itens.splice(index, 1)
  }
  
  function adicionarAoFavorito(livro) {
    const index = fav.value.itens.findIndex((item) => item.id === livro.id)
    if (index === -1) {
      fav.value.itens.push({
        ...livro,
        quantidade: 1,
        total: livro.price
      })
      fav.value.total += livro.price
    } else {
      fav.value.itens[index].quantidade++
      fav.value.itens[index].total += livro.price
      fav.value.total += livro.price
    }
  }
  
  function limparFavorito() {
    fav.value.itens = [];
  }
  
  export { fav, adicionarAoFavorito, removerItemFavorito, limparFavorito }