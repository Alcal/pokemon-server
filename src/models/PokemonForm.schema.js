import { Schema } from 'mongoose';
import Pokemon from './Pokemon.schema.js';
import Type from './Type.schema.js';
import Names, { Name } from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';
import Sprites from './utils/Sprites.schema.js';
import VersionGroup from './VersionGroup.schema.js';

const PokemonForm = new Schema([SchemaBase, Names, {
  form_name: String,
  form_names: [Name],
  form_order: Number,
  is_battle_only: Boolean,
  is_default: Boolean,
  is_mega: Boolean,
  order: Number,
  pokemon: Pokemon,
  sprites: Sprites,
  version_group: VersionGroup,
  types: [{
    slot: Number,
    type: Type,
  }],
}]);

  export default PokemonForm;