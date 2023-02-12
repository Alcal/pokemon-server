import { Schema } from 'mongoose';
import Generation from './Generation.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const VersionGroup = new Schema([SchemaBase], {
  order: Number,
  generation: Generation,
})

export default VersionGroup;