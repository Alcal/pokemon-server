import { Schema } from 'mongoose';
import Descriptions from './utils/Descriptions.schema.js';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';
import VersionGroup from './VersionGroup.schema.js';

const MoveLearnMethod = new Schema([SchemaBase, Descriptions, Names], {
  version_groups: [VersionGroup],
});

export default MoveLearnMethod;