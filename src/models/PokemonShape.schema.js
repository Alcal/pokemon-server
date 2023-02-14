import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const PokemonShape = new Schema([ApiSchemaBase, Names, {
  awesome_names: [{
    awesome_name: String,
    language: { type: Schema.Types.ObjectId, ref: 'Language'},
  }],
}]);

export default PokemonShape;