import { Schema } from 'mongoose';
import MoveDamageClass from './MoveDamageClass.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const Stat = new Schema([SchemaBase, Names], {
  game_index: Number,
  is_battle_only: Boolean,
  move_damage_class: MoveDamageClass,
})

export default Stat