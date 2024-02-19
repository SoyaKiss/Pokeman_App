// This is the old for loop code
// let pokemonList = [
//     {name: 'Horsea', height: 4, type: ['damp', 'swim'] },
//     {name: 'Porygon2', height: 6, type: ['trace', 'analytic'] },
//     {name: 'Uxie', height: 3, type: ['levitate', 'psychic'] },
// ];

// for (let i = 0; i < pokemonList.length; i++) {
//     document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');

//     if (pokemonList[i].height <= 3){
//         document.write(' - Wow, that\'s big!');
//     }
//     document.write('<br />'); 
// }


// This is the new forEach loop
// let pokemonList = [
//     {name: 'Horsea', height: 4, type: ['damp', 'swim'] },
//     {name: 'Porygon2', height: 6, type: ['trace', 'analytic'] },
//     {name: 'Uxie', height: 3, type: ['levitate', 'psychic'] },
// ];

// pokemonList.forEach(function(pokemon) {
//     document.write('<p>' + pokemon.name + " " + pokemon.height + " " + pokemon.type +  '<\p>');
// });


// This is putting the new code in an I.I.F.E
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

    return {
        add: add,
        getAll: getAll
    }
    })();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pika'});
console.log(pokemonRepository.getAll());



// pokemonList.forEach(function() {
//     document.write('<p>' + pokemon.name + " " + pokemon.height + " " + pokemon.type +  '<\p>');
// });
