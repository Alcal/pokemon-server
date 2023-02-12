import { Schema } from 'mongoose';
import Generation from './Generation.schema.js';
import FlavorTextEntries from './utils/FlavorTextEntries.schema.js';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const Ability = new Schema([ SchemaBase, Names, FlavorTextEntries, {
  effect_changes: [
      {
          "effect_entries": [
              {
                  "effect": "Hat im Kampf keinen Effekt.",
                  "language": {
                      "name": "de",
                      "url": "https://pokeapi.co/api/v2/language/6/"
                  }
              },
              {
                  "effect": "Has no effect in battle.",
                  "language": {
                      "name": "en",
                      "url": "https://pokeapi.co/api/v2/language/9/"
                  }
              }
          ],
          "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
          }
      }
  ],
  "effect_entries": [
      {
          "effect": "Attacken die Schaden verursachen haben mit jedem Treffer eine 10% Chance das Ziel zurückschrecken zu lassen, wenn die Attacke dies nicht bereits als Nebeneffekt hat.\n\nDer Effekt stapelt nicht mit dem von getragenen Items.\n\nAußerhalb vom Kampf: Wenn ein Pokémon mit dieser Fähigkeit an erster Stelle im Team steht, tauchen wilde Pokémon nur halb so oft auf.",
          "language": {
              "name": "de",
              "url": "https://pokeapi.co/api/v2/language/6/"
          },
          "short_effect": "Mit jedem Treffer besteht eine 10% Chance das Ziel zurückschrecken zu lassen."
      },
      {
          "effect": "This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
          "language": {
              "name": "en",
              "url": "https://pokeapi.co/api/v2/language/9/"
          },
          "short_effect": "Has a 10% chance of making target Pokémon flinch with each hit."
      }
  ],
  generation: Generation,
  is_main_series: Boolean,
}]);

export default Ability;
