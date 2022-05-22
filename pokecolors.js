/**
 * Function set the right backroundcolor for the pokemon container belongs to the types of them
 */
 function setColorPokemonCard(i) {
    let type = allPokemonArray[i - 1]['types'][0]['type']['name'];

    if (type == 'grass') {
        document.getElementById("pokedex").style.backgroundColor = '#99C262'
    } else if (type == 'fire') {
        document.getElementById("pokedex").style.backgroundColor = '#FF3030'
    } else if (type == 'water') {
        document.getElementById("pokedex").style.backgroundColor = '#1C86EE'
    } else if (type == 'poison') {
        document.getElementById("pokedex").style.backgroundColor = '#8a2be2'
    } else if (type == 'bug') {
        document.getElementById("pokedex").style.backgroundColor = '#54FF9F'
    } else if (type == 'normal') {
        document.getElementById("pokedex").style.backgroundColor = '#f5f5f5'
    } else if (type == 'electric') {
        document.getElementById("pokedex").style.backgroundColor = '#B3EE3A'
    } else if (type == 'fairy') {
        document.getElementById("pokedex").style.backgroundColor = '#f3d0f7'
    } else if (type == 'ground') {
        document.getElementById("pokedex").style.backgroundColor = '#8B7E66'
    } else if (type == 'fighting') {
        document.getElementById("pokedex").style.backgroundColor = '#666969'
    } else if (type == 'psychic') {
        document.getElementById("pokedex").style.backgroundColor = '#36e3bb'
    } else if (type == 'rock') {
        document.getElementById("pokedex").style.backgroundColor = '#47301f'
    } else if (type == 'dragon') {
        document.getElementById("pokedex").style.backgroundColor = '#36e007'
    } else if (type == 'ghost') {
        document.getElementById("pokedex").style.backgroundColor = '#453747'
    }
}

function setColorPokemonBox(i) {
    let type = currentPokemon['types'][0]['type']['name'];

    if (type == 'grass') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#99C262'
    } else if (type == 'fire') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#FF3030'
    } else if (type == 'water') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#1C86EE'
    } else if (type == 'poison') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#8a2be2'
    } else if (type == 'bug') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#54FF9F'
    } else if (type == 'normal') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#f5f5f5'
    } else if (type == 'electric') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#B3EE3A'
    } else if (type == 'fairy') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#f3d0f7'
    } else if (type == 'ground') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#8B7E66'
    } else if (type == 'fighting') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#666969'
    } else if (type == 'psychic') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#36e3bb'
    } else if (type == 'rock') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#47301f'
    } else if (type == 'dragon') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#36e007'
    } else if (type == 'ghost') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#453747'
    }
}


function setColorSearchedPokemon(i) {
    let type = allPokemonArray[i]['types'][0]['type']['name'];

    if (type == 'grass') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#99C262'
    } else if (type == 'fire') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#FF3030'
    } else if (type == 'water') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#1C86EE'
    } else if (type == 'poison') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#8a2be2'
    } else if (type == 'bug') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#54FF9F'
    } else if (type == 'normal') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#f5f5f5'
    } else if (type == 'electric') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#B3EE3A'
    } else if (type == 'fairy') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#f3d0f7'
    } else if (type == 'ground') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#8B7E66'
    } else if (type == 'fighting') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#666969'
    } else if (type == 'psychic') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#36e3bb'
    } else if (type == 'rock') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#47301f'
    } else if (type == 'dragon') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#36e007'
    } else if (type == 'ghost') {
        document.getElementById("pokemonBox" + i).style.backgroundColor = '#453747'
    }
}