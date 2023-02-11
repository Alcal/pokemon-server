import { Schema } from 'mongoose';
import Language from './Language.schema.js';
import MoveDamageClass from './MoveDamageClass.schema.js';
import MoveTarget from './MoveTarget.schema.js';
import Names from './utils/Names.schema.js';
import Stat from './Stat.schema.js';
import Type from './Type.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';
import MoveAilment from './MoveAilment.schema.js';
import MoveCategory from './MoveCategory.schema.js';

const Move = new Schema([SchemaBase, Names, {
  accuracy: Number,
  damage_class: MoveDamageClass,
  effect_chance: null,
  effect_changes: [],
  effect_entries: [{
		effect: String,
		language: Language,
		short_effect: String
	}],
  flavor_text_entries: [{
		flavor_text: String,
		language: Language,
		"version_group": {
				"name": "sun-moon",
				"url": "https://pokeapi.co/api/v2/version-group/17/"
		}
	}],
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