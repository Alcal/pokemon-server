import { Schema } from 'mongoose';
import MoveDamageClass from './MoveDamageClass.schema.js';
import MoveTarget from './MoveTarget.schema.js';
import Names from './utils/Names.schema.js';
import FlavorTextEntries from './utils/FlavorTextEntries.schema.js';
import Stat from './Stat.schema.js';
import Type from './Type.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';
import MoveAilment from './MoveAilment.schema.js';
import MoveCategory from './MoveCategory.schema.js';
import EffectEntries from './utils/EffectEntries.schema.js';

const Move = new Schema([ApiSchemaBase, Names, FlavorTextEntries, EffectEntries, {
  accuracy: Number,
  damage_class: { type: Schema.Types.ObjectId, ref: 'MoveDamageClass'},
  effect_chance: Number,
  effect_changes: [],
  meta: {
    ailment: MoveAilment,
      ailment_chance: Number,
      category: MoveCategory,
      crit_rate: Number,
      drain: Number,
      flinch_chance: Number,
      healing: Number,
      max_hits: Number,
      max_turns: Number,
      min_hits: Number,
      min_turns: Number,
      stat_chance: Number
  },
  power: Number,
  pp: Number,
  priority: Number,
  type: Type,
  target: MoveTarget,
  stat_changes: [{
		change: Number,
		stat: Stat,
	}],
}]);

export default Move;