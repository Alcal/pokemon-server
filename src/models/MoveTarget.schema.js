import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';
import Names from './utils/Names.schema.js';

const MoveTarget = new Schema([
  ApiSchemaBase,
  Names,
  Descriptions,
])

export default MoveTarget;