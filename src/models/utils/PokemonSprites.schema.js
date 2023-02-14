import { Schema } from 'mongoose';

const PokemonSprites = new Schema({
  back_default: String,
  back_female: String,
  back_shiny: String,
  back_shiny_female: String,
  front_default: String,
  front_female: String,
  front_shiny: String,
  front_shiny_female: String,
});

export default PokemonSprites;