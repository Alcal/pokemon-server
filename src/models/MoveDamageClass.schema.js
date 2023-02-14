import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import Descriptions from './utils/Descriptions.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const MoveDamageClass = new Schema([
  ApiSchemaBase,
  Names,
  Descriptions,
]);

export default MoveDamageClass;