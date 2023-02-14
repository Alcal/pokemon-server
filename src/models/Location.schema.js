import { Schema } from 'mongoose';
import GenerationGameIndex from './utils/GenerationGameIndices.schema.js';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const Location = new Schema([SchemaBase, Names, GenerationGameIndex, {}]);

export default Location;

