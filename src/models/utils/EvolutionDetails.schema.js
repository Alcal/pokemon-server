import { Schema } from 'mongoose';

const EvolutionDetails = new Schema({
  gender: Number,
  held_item: { type: Schema.Types.ObjectId, ref: 'Item'},
  item: { type: Schema.Types.ObjectId, ref: 'Item'},
  known_move: { type: Schema.Types.ObjectId, ref: 'Move'},
  known_move_type: { type: Schema.Types.ObjectId, ref: 'Type'},
  location: { type: Schema.Types.ObjectId, ref: 'Location'},
  min_affection: Number,
  min_beauty: Number,
  min_happiness: Number,
  min_level: Number,
  needs_overworld_rain: Boolean,
  party_species: { type: Schema.Types.ObjectId, ref: 'PokemonSpecies'},
  party_type: { type: Schema.Types.ObjectId, ref: 'Type'},
  relative_physical_stats: Number,
  time_of_day: String,
  trade_species: { type: Schema.Types.ObjectId, ref: 'PokemonSpecies'},
  trigger: { type: Schema.Types.ObjectId, ref: 'EvolutionTrigger'},
  turn_upside_down: Boolean
})

export default EvolutionDetails