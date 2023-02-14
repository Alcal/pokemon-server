import { Schema } from 'mongoose';
import pokedex from 'pokedex-promise-v2';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';
import Names from './utils/Names.schema.js';

const Language = new Schema([ ApiSchemaBase, Names, {
  iso3166: String,
  iso639: String,
  official: Boolean,
}]);

Language.static('getAPISource', () => {
  const P = new pokedex();
  return ({
    list: P.getLanguagesList.bind(P),
    byName: P.getLanguageByName.bind(P),
  })
});

export default Language;