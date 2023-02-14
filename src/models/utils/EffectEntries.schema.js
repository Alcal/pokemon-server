import { Schema } from 'mongoose';

const EffectEntries = new Schema({
  effect_entries: [{
    effect: String,
    language: { type: Schema.Types.ObjectId, ref: 'Language'},
    short_effect: String
  }],
});

export default EffectEntries;