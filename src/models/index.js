import mongoose from 'mongoose';
import AbilitySchema from './Ability.schema.js'
import CharacteristicSchema from './Characteristic.schema.js'
import EvolutionChainSchema from './EvolutionChain.schema.js'
import GenerationSchema from './Generation.schema.js';
import LanguageSchema from './Language.schema.js';
import MoveSchema from './Move.schema.js';
import MoveAilmentSchema from './MoveAilment.schema.js';
import MoveCategorySchema from './MoveCategory.schema.js';
import MoveDamageClassSchema from './MoveDamageClass.schema.js';
import MoveLearnMethodSchema from './MoveLearnMethod.schema.js'
import MoveTargetSchema from './MoveTarget.schema.js';
import PokemonSchema from './Pokemon.schema.js';
import PokemonSpeciesSchema from './PokemonSpecies.schema.js';
import PokemonFormSchema from './PokemonForm.schema.js';
import StatSchema from './Stat.schema.js';
import TypeSchema from './Type.schema.js';
import VersionSchema from './Version.schema.js';
import VersionGroupSchema from './VersionGroup.schema.js';

PokemonSpeciesSchema.add({varieties: [{
  is_default: Boolean,
  pokemon: PokemonSchema,
  evolution_chain: EvolutionChainSchema,
}]});

const Ability = mongoose.model('Ability', AbilitySchema)
const Characteristic = mongoose.model('Characteristic', CharacteristicSchema);
const EvolutionChain = mongoose.model('EvolutionChain', EvolutionChainSchema);
const Generation = mongoose.model('Generation', GenerationSchema);
const Language = mongoose.model('Language', LanguageSchema);
const Move = mongoose.model('Move', MoveSchema);
const MoveAilment = mongoose.model('MoveAilment', MoveAilmentSchema);
const MoveCategory = mongoose.model('MoveCategory', MoveCategorySchema);
const MoveDamageClass = mongoose.model('MoveDamageClass', MoveDamageClassSchema);
const MoveLearnMethod = mongoose.model('MoveLearnMethod', MoveLearnMethodSchema);
const MoveTarget = mongoose.model('MoveTarget', MoveTargetSchema);
const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const PokemonSpecies = mongoose.model('PokemonSpecies', PokemonSpeciesSchema);
const PokemonForm = mongoose.model('PokemonForm', PokemonFormSchema);
const Stat = mongoose.model('Stat', StatSchema);
const Type = mongoose.model('Type', TypeSchema);
const Version = mongoose.model('Version', VersionSchema);
const VersionGroup = mongoose.model('VersionGroup', VersionGroupSchema);

export {
  Ability,
  Characteristic,
  EvolutionChain,
  Generation,
  Language,
  Move,
  MoveAilment,
  MoveCategory,
  MoveDamageClass,
  MoveLearnMethod,
  MoveTarget,
  Pokemon,
  PokemonForm,
  PokemonSpecies,
  Stat,
  Type,
  Version,
  VersionGroup,
}