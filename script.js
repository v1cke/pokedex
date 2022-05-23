let currentPokemon;
let allPokemonArray = [];
let pokemonLimit = 21;


async function loadPokemons() {
    for (let i = 1; i < pokemonLimit; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemonArray.push(currentPokemon);
        renderPokemonBox(i);
    }
}


async function loadMorePokemons() {
    pokemonLimit = pokemonLimit + 20;
    for (let i = (pokemonLimit - 20); i < pokemonLimit; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemonArray.push(currentPokemon);
        renderPokemonBox(i);
    }
}


function renderPokemonBox(i) {
    let pokemonBox = document.getElementById('allPokemonContainer');
    pokemonBox.innerHTML += renderPokemon(i);
    setColorPokemonBox(i);
}


async function loadPokemonInfo(i) {
    chosenPokemon = '';
    document.getElementById('pokemonCardContainer').style.display = "flex";
    chosenPokemon = allPokemonArray[i - 1];
    document.getElementById('pokemonCard').innerHTML = loadPokemonCardInfo(chosenPokemon, i);
    setColorPokemonCard(i);
    document.body.classList.add('overflow-hidden');
}


function searchPokemon() {
    let PokemonContainer = document.getElementById('allPokemonContainer');
    PokemonContainer.innerHTML = '';
    let searchPokemon = document.getElementById('searchPokemon').value;
    searchPokemon = searchPokemon.toLowerCase();
    for (let i = 0; i < allPokemonArray.length; i++) {
        let Pokemon = allPokemonArray[i]['name'];
        if (searchPokemon == '' && PokemonContainer == '') {
            PokemonContainer.innerHTML = loadPokemons();
        } else if (Pokemon.toLowerCase().includes(searchPokemon)) {
            PokemonContainer.innerHTML += renderSearchedPokemon(i);
            setColorSearchedPokemon(i);

        }
    }
    PokemonContainer.innerHTML += `
    <button onclick="loadMorePokemons()" class="button">Load more Pokemons...</button>`;
}


function hidePokemonCard() {
        document.getElementById('pokemonCardContainer').style.display =  "none";
        document.body.classList.remove('overflow-hidden');
}


