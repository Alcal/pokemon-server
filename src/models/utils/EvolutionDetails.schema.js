import { Schema } from 'mongoose';
import EvolutionTrigger from '../EvolutionTrigger.schema.js'
import Item from '../Item.schema.js';
import Location from '../Location.schema.js';
import Move from '../Move.schema.js';
import PokemonSpecies from '../PokemonSpecies.schema.js';
import Type from '../Type.schema.js';

const EvolutionDetails = new Schema({
  gender: Number,
  held_item: Item,
  item: Item,
  known_move: Move,
  known_move_type: Type,
  location: Location,
  min_affection: Number,
  min_beauty: Number,
  min_happiness: Number,
  min_level: Number,
  needs_overworld_rain: Boolean,
  party_species: PokemonSpecies,
  party_type: Type,
  relative_physical_stats: Number,
  time_of_day: String,
  trade_species: PokemonSpecies,
  trigger: EvolutionTrigger,
  turn_upside_down: Boolean
})

export default EvolutionDetails