import mongoose from 'mongoose';
import LanguageSchema from './Language.schema.js';
import Move from './Move.schema.js';
import MoveAilmentSchema from './MoveAilment.schema.js';
import MoveCategorySchema from './MoveCategory.schema.js';
import MoveDamageClassSchema from './MoveDamageClass.schema.js';
import MoveTargetSchema from './MoveTarget.schema.js';
import TypeSchema from './Type.schema.js';

const Language = mongoose.model('Language', LanguageSchema);
const MoveAilment = mongoose.model('MoveAilment', MoveAilmentSchema);
const MoveCategory = mongoose.model('MoveCategory', MoveCategorySchema);
const MoveDamageClass = mongoose.model('MoveDamageClass', MoveDamageClassSchema);
const MoveTarget = mongoose.model('MoveTarget', MoveTargetSchema);
const Type = mongoose.model('Type', TypeSchema);

export {
  Language,
  MoveAilment,
  MoveCategory,
  MoveDamageClass,
  MoveTarget,
  Type,
}