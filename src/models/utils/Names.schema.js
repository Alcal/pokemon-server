import { Schema } from 'mongoose';

export const Name = new Schema({
  name: String,
  language: { type: Schema.Types.ObjectId, ref: 'Language'},
})

const Names = new Schema({
  names: [Name]
})

export default Names