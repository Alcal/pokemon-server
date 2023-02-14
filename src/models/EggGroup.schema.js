import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const EggGroup = new Schema([SchemaBase, Names]);

export default EggGroup;