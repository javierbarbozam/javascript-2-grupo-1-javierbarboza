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

function pokemonSelectListener () {
  pokemonSelect.addEventListener ('change', () => {
    let pokemonId = pokemonSelect.value
    loadPokemon(pokemonId)
  })
}
pokemonSelectListener()

const loadPokemon = async (pokemonId) => {
  if (pokemonId != 'Seleccione un Pokémon') {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json()
    console.log(data)
    pokemonInformation(data)
  }
}

const pokemonInformation = (data) => {
  let info = `
  <h2 class="pokemon-name">${data.name}</h2>
  <img class="pokemon-img" src="${data.sprites.other.dream_world.front_default}" alt="">
  <div class="pokemon-info">
    <p>Height: ${data.height}</p>
    <p>weight: ${data.weight}</p>
    <ul class="pokemon-abilities">
      <span>Habilidades</span>
      ${data.abilities.map((item) => {return `<li>${item.ability.name}</li>`}).join('')}
    </ul>
    <ul class="pokemon-stats">
      <span>Estadísticas</span>
    </ul>

  </div>
  `
  
  
  pokemonDetail.innerHTML = info



  // Nombre, 
// imagen, 
// altura, 
// peso,
// habilidades (solo nombre de habilidades)
// stats: Nombre y base_stat
}


async function info () {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/111');
  const data = await response.json()
  document.getElementById('prueba').innerHTML = Object.keys(data).map((item) => {return `<p>${item}</p>`}) 
}
info()