import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const GrowthRate = new Schema([ApiSchemaBase, Descriptions, {
  formula: String,
  levels: [{
    experience: Number,
    level: Number,
  }]
}])

export default GrowthRate;