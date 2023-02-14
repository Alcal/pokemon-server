import { Schema } from 'mongoose';
import EffectEntries from './utils/EffectEntries.schema.js';
import FlavorTextEntries from './utils/FlavorTextEntries.schema.js';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const Item = new Schema([SchemaBase, EffectEntries, FlavorTextEntries, Names, {}])

export default Item;