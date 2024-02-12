let pokemonList = [
    {name: 'Horsea', height: 4, type: ['damp', 'swim'] },
    {name: 'Porygon2', height: 6, type: ['trace', 'analytic'] },
    {name: 'Uxie', height: 3, type: ['levitate', 'psychic'] },
];

// This is where we created the loop that iterates over each item from my list; which gets sent over to the DOM via document write
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');

    if (pokemonList[i].height <= 3){
        document.write(' - Wow, that\'s big!');
    }
    document.write('<br />'); 
}

