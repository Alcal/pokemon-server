import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const Version = new Schema([ApiSchemaBase, Names, {
  version_group: { type: Schema.Types.ObjectId, ref: 'VersionGroup'},
}]);

export default Version;