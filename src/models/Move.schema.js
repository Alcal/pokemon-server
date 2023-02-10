import { Schema } from 'mongoose';
import Language from './Language.schema';
import Stat from './Stat.schema';
import Type from './Type.schema';

const Move = new Schema({
  accuracy: Number,
  damage_class: {
      "name": "physical",
      "url": "https://pokeapi.co/api/v2/move-damage-class/2/"
  },
  "effect_chance": null,
  "effect_changes": [],
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
  "generation": {
      "name": "generation-i",
      "url": "https://pokeapi.co/api/v2/generation/1/"
  },
  api_id: Number,
  "machines": [],
  meta: {
      "ailment": {
          "name": "none",
          "url": "https://pokeapi.co/api/v2/move-ailment/0/"
      },
      ailment_chance: Number,
      "category": {
          "name": "damage",
          "url": "https://pokeapi.co/api/v2/move-category/0/"
      },
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
  name: String,
  names: [{
		language: Language,
		name: String,
	}],
  power: Number,
  pp: Number,
  priority: Number,
  stat_changes: [{
		change: Number,
		stat: Stat,
	}],
  "super_contest_effect": {
      "url": "https://pokeapi.co/api/v2/super-contest-effect/5/"
  },
  "target": {
      "name": "selected-pokemon",
      "url": "https://pokeapi.co/api/v2/move-target/10/"
  },
  type: Type,
})

export default Move;