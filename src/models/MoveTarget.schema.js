import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';
import Names from './utils/Names.schema.js';

const MoveTarget = new Schema([
  SchemaBase,
  Names,
  Descriptions,
])

export default MoveTarget;