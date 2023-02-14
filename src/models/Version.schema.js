import { Schema } from 'mongoose';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';
import VersionGroup from './VersionGroup.schema.js';

const Version = new Schema([SchemaBase, Names, {
  version_group: VersionGroup,
}]);

export default Version;