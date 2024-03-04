// //This is putting the new code in an I.I.F.E
let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Horsea', height: 4, type: ['damp', 'swim'] },
        {name: 'Porygon2', height: 6, type: ['trace', 'analytic'] },
        {name: 'Uxie', height: 3, type: ['levitate', 'psychic'] },
    ];

    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');

        listItem.classList.add('list-item-pokemon');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');

        listItem.appendChild(button);
        pokemonUnorderedList.appendChild(listItem);
        
        pokemon-button.addEventListener('click', function() {
            showDetails(pokemon);
        })
    }

    function showDetails(pokemon) {
        console.log(pokemon.name)
    };
    

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    }
    })();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu', height: 8, type: ['cute', 'adorable'] });
console.log(pokemonRepository.getAll());

let pokemonUnorderedList = document.querySelector('.pokemon-list');

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

// InnerText - assigning a header title
let mainTitle = document.querySelector('h1');
mainTitle.innerText = 'Pokedex';
mainTitle.classList.add('pokedex-title');