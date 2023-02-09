import pokedex from 'pokedex-promise-v2';
const Pokedex = new pokedex();


const getPokedexSummary = async () => {

}

const getPokedexEntry = async (id) =>
  await Pokedex.getPokemonByName(id);

export {
  getPokedexSummary,
  getPokedexEntry,
}