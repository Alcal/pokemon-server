import { Schema } from 'mongoose';
import Language from '../Language.schema.js';

export const Description = new Schema({
  description: String,
  language: Language,
})

const Descriptions = new Schema({
  descriptions: [Description],
})

export default Descriptions;