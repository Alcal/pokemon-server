import { Schema } from 'mongoose';
import EffectEntries from './utils/EffectEntries.schema.js';
import FlavorTextEntries from './utils/FlavorTextEntries.schema.js';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const Ability = new Schema([ ApiSchemaBase, Names, FlavorTextEntries, EffectEntries, {
  generation: { type: Schema.Types.ObjectId, ref: 'Generation'},
  is_main_series: Boolean,
}]);

export default Ability;
