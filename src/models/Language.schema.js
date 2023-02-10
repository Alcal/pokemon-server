import { Schema } from 'mongoose';

const Language = new Schema({
  api_id: Number,
  iso3166: String,
  iso639: String,
  name: String,
  official: Boolean,
})

Language.add({
  names: [{
    language: Language,
    name: String,
  }],
})

export default Language;