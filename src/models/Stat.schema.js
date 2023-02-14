import { Schema } from 'mongoose';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';
import Names from './utils/Names.schema.js';

const Stat = new Schema([ApiSchemaBase, Names], {
  game_index: Number,
  is_battle_only: Boolean,
  move_damage_class: { type: Schema.Types.ObjectId, ref: 'MoveDamageClass'},
})

export default Stat