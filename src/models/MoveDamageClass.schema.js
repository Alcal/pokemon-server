import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import Descriptions from './utils/Descriptions.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const MoveDamageClass = new Schema([
  SchemaBase,
  Names,
  Descriptions,
]);

export default MoveDamageClass;