import { Schema } from 'mongoose';
import Language from '../Language.schema.js';

const Descriptions = new Schema({
  descriptions: [{
    description: String,
    language: Language,
  }],
})

export default Descriptions;