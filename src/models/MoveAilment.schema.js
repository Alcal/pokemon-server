import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const MoveAilment = new Schema([SchemaBase, Names])

export default MoveAilment;