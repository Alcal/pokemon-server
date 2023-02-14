import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const MoveAilment = new Schema([ApiSchemaBase, Names])

export default MoveAilment;