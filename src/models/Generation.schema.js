import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const Generation = new Schema([SchemaBase, Names]);

export default Generation;