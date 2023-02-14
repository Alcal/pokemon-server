import { Schema } from "mongoose";
import { Description } from "./utils/Descriptions.schema.js";
import FlavorTextEntries from "./utils/FlavorTextEntries.schema.js";
import Names from "./utils/Names.schema.js";
import ApiSchemaBase from "./utils/ApiSchemaBase.schema.js";

const PokemonSpecies = new Schema([ApiSchemaBase, Names, FlavorTextEntries, {
  base_happiness: Number,
  capture_rate: Number,
  color: { type: Schema.Types.ObjectId, ref: 'PokemonColor'},
  egg_groups: [{ type: Schema.Types.ObjectId, ref: 'EggGroup'}],
  form_descriptions: [Description],
  forms_switchable: Boolean,
  gender_rate: Number,
  genera: [{
    genus: String,
    language: { type: Schema.Types.ObjectId, ref: 'Language'},
  }],
  generation: { type: Schema.Types.ObjectId, ref: 'Generation'},
  growth_rate: { type: Schema.Types.ObjectId, ref: 'GrowthRate'},
  habitat: { type: Schema.Types.ObjectId, ref: 'PokemonHabitat'},
  hatch_counter: Number,
  is_baby: Boolean,
  is_legendary: Boolean,
  is_mythical: Boolean,
  has_gender_differences: Boolean,
  order: Number,
  shape: { type: Schema.Types.ObjectId, ref: 'PokemonShape'},
  evolves_from_species: { type: Schema.Types.ObjectId, ref: 'PokemonSpecies'},
}])


export default PokemonSpecies;