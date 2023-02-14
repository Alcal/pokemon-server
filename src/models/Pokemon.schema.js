import { Schema } from 'mongoose';
import Ability from './Ability.schema.js';
import Move from './Move.schema.js';
import Stat from './Stat.schema.js';
import Type from './Type.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';
import VersionGroup from './VersionGroup.schema.js';
import Version from './Version.schema.js';
import MoveLearnMethod from './MoveLearnMethod.schema.js';
import PokemonSpecies from './PokemonSpecies.schema.js';
import PokemonSprites from './utils/PokemonSprites.schema.js';

const Pokemon = new Schema(SchemaBase, [{
  order: Number,
  weight: Number,
  height: Number,
	base_experience: Number,
  is_default: Boolean,
	stats: [{
    base_stat: Number,
    effort: Number,
    stat: Stat,
  }],
  types: [{
    slot: Number,
    type: Type,
  }],
  abilities: [{
    ability: Ability,
    is_hidden: Boolean,
    slot: Number,
  }],
  game_indices: [{
    game_index: Number,
    version: Version
  }],
  held_items: [],
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
  moves: [{
    move: Move,
    version_group_details: [{
			level_learned_at: Number,
			move_learn_method: MoveLearnMethod,
			version_group: VersionGroup,
    }]
	}],
  species: PokemonSpecies,
  sprites: new Schema([PokemonSprites, {
		"other": {
			"dream_world": PokemonSprites,
			"home": PokemonSprites,
			"official-artwork": PokemonSprites,
		},
		versions: {
			"generation-i": {
				"red-blue": PokemonSprites,
				"yellow": PokemonSprites,
			},
			"generation-ii": {
				"crystal": PokemonSprites,
				"gold": PokemonSprites,
				"silver": PokemonSprites,
			},
			"generation-iii": {
				"emerald": PokemonSprites,
				"firered-leafgreen": PokemonSprites,
				"ruby-sapphire": PokemonSprites
			},
			"generation-iv": {
				"diamond-pearl": PokemonSprites,
				"heartgold-soulsilver": PokemonSprites,
				"platinum": PokemonSprites
			},
			"generation-v": {
				"black-white": new Schema ([PokemonSprites, {
					"animated": PokemonSprites
				}])
			},
			"generation-vi": {
				"omegaruby-alphasapphire": PokemonSprites,
				"x-y": PokemonSprites
			},
			"generation-vii": {
				"icons": PokemonSprites,
				"ultra-sun-ultra-moon": PokemonSprites
			},
			"generation-viii": {
					"icons": PokemonSprites,
			}
		}
  }]),
}])

export default Pokemon;