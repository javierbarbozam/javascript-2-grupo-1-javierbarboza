const pokemonSelect = document.getElementById('pokemonSelect');
const pokemonDetail = document.getElementById('pokemon-detail');

// fetching all Pokemon from API
const pokemonApiData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=110&limit=100');
  const data = await response.json()
  pokemonList(data.results)
}
pokemonApiData()

// Creates all the <option> HTML tags
const pokemonList = (item) => {
  let list = '<option>Seleccione un Pokémon</option>';
  item.forEach(element => {
    list += `<option value="${element.url.slice(34,37)}">${element.name}</option>` //slice in order to have specific id from url
  });
  pokemonSelect.innerHTML = list
}

// Select HTML Tag Event listener
function pokemonSelectListener () {
  pokemonSelect.addEventListener ('change', () => {
    let pokemonId = pokemonSelect.value
    loadPokemon(pokemonId)
  })
}
pokemonSelectListener()

// Specific Pokemon API function
const loadPokemon = async (pokemonId) => {
  if (pokemonId != 'Seleccione un Pokémon') {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json()
    pokemonInformation(data)
  } else {pokemonDetail.innerHTML = ''} // Clear DOM in case any Pokemon is selected
}

// Creates specific Pokemon information at DOM
const pokemonInformation = (data) => {
  pokemonDetail.innerHTML = `
  <h2 class="pokemon-name">${data.name}</h2>
  <img class="pokemon-img" src="${data.sprites.other.dream_world.front_default}" alt="">
  <div class="pokemon-info">
    <div>
      <span class="subtitle">Altura</span>
      <p>${data.height}</p>
    </div>
    <div>
      <span class="subtitle">Peso</span>
      <p>${data.weight}</p>
    </div>
    <ul class="pokemon-abilities">
      <span class="subtitle">Habilidades</span>
      ${data.abilities.map((item) => {return `<li>${item.ability.name}</li>`}).join('')}
    </ul>
    <div class="pokemon-stats">
      <span class="subtitle">Estadísticas</span>
      ${data.stats.map((item) => {
        return `
        <div>
          <p>${item.stat.name}</p>
          <p>${item.base_stat}</p>
        </div>`
      }).join('')}
    </div>
  </div>
  `
}