import { Schema } from 'mongoose';
import Language from './Language.schema.js';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const PokemonShape = new Schema([SchemaBase, Names, {
  awesome_names: [{
    awesome_name: String,
    language: Language,
  }],
}]);

export default PokemonShape;