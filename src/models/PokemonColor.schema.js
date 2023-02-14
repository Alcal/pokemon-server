import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const PokemonColor = new Schema([ApiSchemaBase, Names]);

export default PokemonColor;