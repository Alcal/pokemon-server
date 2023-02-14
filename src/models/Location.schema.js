import { Schema } from 'mongoose';
import GenerationGameIndex from './utils/GenerationGameIndices.schema.js';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const Location = new Schema([ApiSchemaBase, Names, GenerationGameIndex, {}]);

export default Location;

