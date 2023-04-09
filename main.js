// Nombre, 
// imagen, 
// altura, 
// peso,
// habilidades (solo nombre de habilidades)
// stats: Nombre y base_stat

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

function selectPokemonListener () {
  pokemonSelect.addEventListener ('change', () => {
    let pokemonId = pokemonSelect.value
    loadPokemon(pokemonId)
  })
}
selectPokemonListener()

const loadPokemon = async (pokemonId) => {
  if (pokemonId != 'Seleccione un Pokémon') {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json()
    console.log(data)
  }
}

const pokemonInformation = () => {}