import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const MoveCategory = new Schema([SchemaBase, Descriptions]);

export default MoveCategory;