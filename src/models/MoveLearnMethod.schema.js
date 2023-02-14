import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const MoveLearnMethod = new Schema([ApiSchemaBase, Descriptions, Names], {
  version_groups: [{ type: Schema.Types.ObjectId, ref: 'VersionGroup'}],
});

export default MoveLearnMethod;