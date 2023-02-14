import { Schema } from 'mongoose';
import Language from '../Language.schema.js';

const EffectEntries = new Schema({
  effect_entries: [{
    effect: String,
    language: Language,
    short_effect: String
  }],
});

export default EffectEntries;