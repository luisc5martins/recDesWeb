import { ref } from 'vue'

let fav = ref({
  itens: []
})
  
  function removerItemFavorito(itens) {
    const index = fav.value.itens.findIndex((i) => i.id === item.id)
    fav.value.itens.splice(index, 1)
  }
  
  function adicionarAoFavorito(itens) {
    const index = fav.value.itens.findIndex((item) => item.id === livro.id)
    if (index === -1) {
      fav.value.itens.push({
        ...livro,
      })
    } else {
      fav.value.itens[index].quantidade++
    }
  }
  
  function limparFavorito() {
    fav.value.itens = [];
  }
  
  export { fav, removerItemFavorito, adicionarAoFavorito, limparFavorito }