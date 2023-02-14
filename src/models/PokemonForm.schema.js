import { Schema } from 'mongoose';
import Pokemon from './Pokemon.schema.js';
import Type from './Type.schema.js';
import Names, { Name } from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';
import Sprites from './utils/Sprites.schema.js';

const PokemonForm = new Schema([ApiSchemaBase, Names, {
  form_name: String,
  form_names: [Name],
  form_order: Number,
  is_battle_only: Boolean,
  is_default: Boolean,
  is_mega: Boolean,
  order: Number,
  pokemon: { type: Schema.Types.ObjectId, ref: 'Pokemon' },
  sprites: Sprites,
  version_group: { type: Schema.Types.ObjectId, ref: 'VersionGroup'},
  types: [{
    slot: Number,
    type: { type: Schema.Types.ObjectId, ref: 'Type'},
  }],
}]);

  export default PokemonForm;