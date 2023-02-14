import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const GrowthRate = new Schema([SchemaBase, Descriptions, {
  formula: String,
  levels: [{
    experience: Number,
    level: Number,
  }]
}])

export default GrowthRate;