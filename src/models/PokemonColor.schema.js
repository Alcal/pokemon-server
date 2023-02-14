import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const PokemonColor = new Schema([SchemaBase, Names]);

export default PokemonColor;