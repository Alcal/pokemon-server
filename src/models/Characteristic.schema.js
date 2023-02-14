import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const Characteristic = new Schema([ApiSchemaBase, Descriptions, {
  highest_stat: { type: Schema.Types.ObjectId, ref: 'Stat'},
  possible_values: [Number],
}])

export default Characteristic;