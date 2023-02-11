import { Schema } from 'mongoose';
import Language from '../Language.schema.js';

const Names = new Schema({
  names: [{
    name: String,
    language: Language,
  }]
})

export default Names