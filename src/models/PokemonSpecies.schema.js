import { Schema } from "mongoose";
import EggGroup from "./EggGroup.schema.js";
import Generation from "./Generation.schema.js";
import GrowthRate from "./GrowthRate.schema.js"
import Language from "./Language.schema.js";
import PokemonColor from "./PokemonColor.schema.js";
import PokemonHabitat from "./PokemonHabitat.schema.js";
import PokemonShape from "./PokemonShape.schema.js";
import { Description } from "./utils/Descriptions.schema.js";
import FlavorTextEntries from "./utils/FlavorTextEntries.schema.js";
import Names from "./utils/Names.schema.js";
import SchemaBase from "./utils/SchemaBase.schema.js";

const PokemonSpecies = new Schema([SchemaBase, Names, FlavorTextEntries, {
  base_happiness: Number,
  capture_rate: Number,
  color: PokemonColor,
  egg_groups: [EggGroup],
  form_descriptions: [Description],
  forms_switchable: Boolean,
  gender_rate: Number,
  genera: [{
    genus: String,
    language: Language,
  }],
  generation: Generation,
  growth_rate: GrowthRate,
  habitat: PokemonHabitat,
  hatch_counter: Number,
  is_baby: Boolean,
  is_legendary: Boolean,
  is_mythical: Boolean,
  has_gender_differences: Boolean,
  order: Number,
  shape: PokemonShape,
}])

PokemonSpecies.add({ evolves_from_species: PokemonSpecies });

export default PokemonSpecies;