import { Schema } from "mongoose";
import EvolutionDetails from "./EvolutionDetails.schema.js";

const ChainLink = new Schema({
  is_baby: Boolean,
  species: { type: Schema.Types.ObjectId, ref: 'PokemonSpecies'},
  evolution_details: [EvolutionDetails],
})

ChainLink.add({
  evolves_to: [{ type: Schema.Types.ObjectId, ref: 'ChainLink'}],
})

export default ChainLink;