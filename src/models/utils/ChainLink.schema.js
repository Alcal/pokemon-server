import { Schema } from "mongoose";
import PokemonSpecies from "../PokemonSpecies.schema.js";
import EvolutionDetails from "./EvolutionDetails.schema.js";

const ChainLink = new Schema({
  is_baby: Boolean,
  species: PokemonSpecies,
  evolution_details: [EvolutionDetails],
})

ChainLink.add({
  evolves_to: [ChainLink],
})

export default ChainLink;