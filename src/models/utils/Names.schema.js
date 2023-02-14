import { Schema } from 'mongoose';
import Language from '../Language.schema.js';

export const Name = new Schema({
  name: String,
  language: Language,
})

const Names = new Schema({
  names: [Name]
})

export default Names