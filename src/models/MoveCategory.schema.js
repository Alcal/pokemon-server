import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const MoveCategory = new Schema([ApiSchemaBase, Descriptions]);

export default MoveCategory;