import mongoose from 'mongoose';
import LanguageSchema from './Language.schema.js';

const Language = mongoose.model('Language', LanguageSchema);

export {
  Language,
}