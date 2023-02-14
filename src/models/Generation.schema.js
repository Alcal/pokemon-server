import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const Generation = new Schema([ApiSchemaBase, Names]);

export default Generation;