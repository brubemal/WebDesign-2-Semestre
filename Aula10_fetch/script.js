let API_URL = 'https://6724b5a4c39fedae05b27200.mockapi.io/bugoo/Animal'; 
function carregarAnimais() {
  fetch(API_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(animais) {
      let animalList = document.getElementById('animal-list');
      animalList.innerHTML = '';

      for (let i = 0; i < animais.length; i++) {
        let animal = animais[i];
        let li = document.createElement('li');
        li.textContent = animal.id + ' - ' + animal.nome + ' (' + animal.idade + ' anos) - ' + animal.raca;
        animalList.appendChild(li);

        function cadastrarAnimal() {
            var novoAnimal = {
              nome: 'Totó',
              idade: 12,
              raca: 'cachorro'
            };
          
            fetch(API_URL, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(novoAnimal)
            })
              .then(function(response) {
                if (response.ok) {
                  carregarAnimais(); 