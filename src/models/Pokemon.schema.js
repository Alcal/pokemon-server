import { Schema } from 'mongoose';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';
import PokemonSprites from './utils/PokemonSprites.schema.js';

const Pokemon = new Schema(ApiSchemaBase, [{
  order: Number,
  weight: Number,
  height: Number,
	base_experience: Number,
  is_default: Boolean,
	stats: [{
    base_stat: Number,
    effort: Number,
    stat: { type: Schema.Types.ObjectId, ref: 'Stat'},
  }],
  types: [{
    slot: Number,
    type: { type: Schema.Types.ObjectId, ref: 'Type'},
  }],
  abilities: [{
    ability: { type: Schema.Types.ObjectId, ref: 'Ability'},
    is_hidden: Boolean,
    slot: Number,
  }],
  game_indices: [{
    game_index: Number,
    version: { type: Schema.Types.ObjectId, ref: 'Version'}
  }],
  held_items: [],
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
  moves: [{
    move: { type: Schema.Types.ObjectId, ref: 'Move'},
    version_group_details: [{
			level_learned_at: Number,
			move_learn_method: { type: Schema.Types.ObjectId, ref: 'MoveLearnMethod'},
			version_group: { type: Schema.Types.ObjectId, ref: 'VersionGroup'},
    }]
	}],
  species: { type: Schema.Types.ObjectId, ref: 'PokemonSpecies'},
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