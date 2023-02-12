import { Schema } from 'mongoose';
import Stat from './Stat.schema.js';
import Descriptions from './utils/Descriptions.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const Characteristic = new Schema([SchemaBase, Descriptions, {
  highest_stat: Stat,
  possible_values: [Number],
}])

export default Characteristic;