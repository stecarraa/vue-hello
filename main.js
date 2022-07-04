// Descrizione:
// Stampare a schermo un messaggio all’interno di un elemento h1, utilizzando i data nell'istanza di Vue.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa dai data.

var app = new Vue({
    el: '#app',
    data: {
      message: 'Super mega titolone alla Petricc!',
      image: 'https://picsum.photos/id/1005/600/200',
      placeholder:"Se vuoi cambiare titolo clicca qua"
    }
  })