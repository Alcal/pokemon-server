import { Schema } from 'mongoose';
import EffectEntries from './utils/EffectEntries.schema.js';
import FlavorTextEntries from './utils/FlavorTextEntries.schema.js';
import Names from './utils/Names.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const Item = new Schema([ApiSchemaBase, EffectEntries, FlavorTextEntries, Names, {}])

export default Item;