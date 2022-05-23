function renderPokemon(i) {
    return `
        <div onclick="loadPokemonInfo(${i})" id="pokemonBox${i}" class="pokemon-box">
            <h2 class="pokemonname">${currentPokemon['name']}</h2>
            <h3>${currentPokemon['types'][0]['type']['name']}<h3>
            <img class="pokemon-box-img" src=${currentPokemon['sprites']['other']['dream_world']['front_default']}>
            </div>
            `
}

function renderSearchedPokemon(i) {
    return /*html*/ `
            <div onclick="loadPokemonInfo(${i + 1})" id="pokemonBox${i}" class="pokemon-box">
            <h2 class="pokemonname">${allPokemonArray[i]['name']}</h2>
            <h3>${allPokemonArray[i]['types'][0]['type']['name']}<h3>
            <img class="pokemon-box-img" src=${allPokemonArray[i]['sprites']['other']['dream_world']['front_default']}>
            </div>
            `
}

function loadPokemonCardInfo(i) {
    return /*html*/ `
    <div id="pokedex">
        <div class="namenumber"><span>${chosenPokemon['name']}</span><span class="id">#${chosenPokemon['id']}</span></div>
        <div class="display-flex">
            <div class="types">${chosenPokemon['types']['0']['type']['name']}</div>
        </div>
    </div>

    <div id="infoContainer" class="info-container">
        <div class="pokemonImgContainer"><img src="${chosenPokemon['sprites']['other']['home']['front_shiny']}" id="pokemonImg" class="pokemon-img"></div>

        <div class="pokemon-stats">
            <div class="stats-navigation">
            <h2>About</h2>
        </div>

        <div class="pokemon-stats-container">
            <table class="pokemon-stats-table">
                <tr>
                    <td>Species</td>
                    <td>${chosenPokemon['species']['name']}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>${chosenPokemon['height'] * 10} cm</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>${chosenPokemon['weight'] * 0.1} kg</td>
                </tr>
            </table>
            <h2 class="marginTB">Base Stats</h2>
            <table class="pokemon-stats-table">
                <tr>
                    <td>HP</td>
                    <td>${chosenPokemon['stats'][0]['base_stat']}</td>
                </tr>
                <tr>
                    <td>Attack</td>
                    <td>${chosenPokemon['stats'][1]['base_stat']}</td>
                </tr>
                <tr>
                    <td>Defense</td>
                    <td>${chosenPokemon['stats'][2]['base_stat']}</td>
                </tr>
                <tr>
                    <td>Special Attack</td>
                    <td>${chosenPokemon['stats'][3]['base_stat']}</td>
                </tr>
                <tr>
                    <td>Defense</td>
                    <td>${chosenPokemon['stats'][4]['base_stat']}</td>
                </tr>
                <tr>
                    <td>Special Attack</td>
                    <td>${chosenPokemon['stats'][5]['base_stat']}</td>
                </tr>
            </table>
        </div>
    </div>
        `
}

