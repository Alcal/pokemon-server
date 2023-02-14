import { Schema } from 'mongoose';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const VersionGroup = new Schema([ApiSchemaBase], {
  order: Number,
  generation: { type: Schema.Types.ObjectId, ref: 'Generation'},
})

export default VersionGroup;