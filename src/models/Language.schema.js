import { Schema } from 'mongoose';
import SchemaBase from './utils/SchemaBase.schema.js';

const Language = new Schema([ SchemaBase, {
  iso3166: String,
  iso639: String,
  official: Boolean,
}]);

Language.add({
  names: [{
    language: Language,
    name: String,
  }],
})

export default Language;