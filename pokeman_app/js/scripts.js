let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');
    // That is a link to the API

    // These are standards that are part of the I.I.F.E function
    function add (pokemon) {
      pokemonList.push(pokemon);
    }
    function getAll() {
      return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonUnorderedList = document.querySelector('.pokemon-list');
        // This targets the UL class; pokemon-list
        let listItem = document.createElement('li');
        // we are creating a new variable here called list item and declaring it to be a list item (li)
        let button = document.createElement('button');
        // We are adding a button functionality to these list items
        listItem.classList.add('list-item-pokemon');
        // Here we are giving it a class
        button.innerText = pokemon.name;
        // This is where we call the pokemon.name --> which comes from the API
        button.classList.add('pokemon-button');
        // We are declaring a class name for our button
        listItem.appendChild(button);
        // Here we are appending the button to the list item
        pokemonUnorderedList.appendChild(listItem);
        // Here we are appending the new button/list item to the unordered list
        pokemon-button.addEventListener('click', function(event) {
          showDetails(pokemon);
        // Here, upon clicking the button - we are executing the showDetails function which is listed below
      });
    }

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = { 
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(item) {
      loadDetails(item).then(function (){
        showModal(item);
      });
      // We first needed to call the loadDetails function; before showing the Modal --> because the modal
      // is fetching data from the loadDetails function!
    }

    // Adding the modal here --> will need to be replaced into the showDetails method
    function showModal(pokemon, item) {
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');
    
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);
    
      let titleElement = document.createElement('h1');
      titleElement.innerText = 'Name: ' + pokemon.name;
      let contentElement = document.createElement('p');
      contentElement.innerText = 'Height: ' + pokemon.height + ' in tall';
    
      let myImage = document.createElement('img');
      myImage.classList.add('my-image');
      myImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
      
    
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(myImage);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');
      modalContainer.addEventListener('click', (e) => {
      let target = e.target;
        if (target === modalContainer) {
          hideModal();
    }
  });
}

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails, 
        showModal: showModal
    }

  })();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
      
document.querySelector('#show-modal').addEventListener('click', () => {
  showModal();
});

// InnerText - assigning a header title
let mainTitle = document.querySelector('h1');
mainTitle.innerText = 'Pokedex';
mainTitle.classList.add('pokedex-title');

// let icon = document.createElement('icon');
// icon.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png';
// document.getElementById('pokedex-title').appendChild(icon);
