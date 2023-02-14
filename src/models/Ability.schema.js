import { Schema } from 'mongoose';
import Generation from './Generation.schema.js';
import EffectEntries from './utils/EffectEntries.schema.js';
import FlavorTextEntries from './utils/FlavorTextEntries.schema.js';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const Ability = new Schema([ SchemaBase, Names, FlavorTextEntries, EffectEntries, {
  generation: Generation,
  is_main_series: Boolean,
}]);

export default Ability;
