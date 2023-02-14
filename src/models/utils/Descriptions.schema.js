import { Schema } from 'mongoose';

export const Description = new Schema({
  description: String,
  language: { type: Schema.Types.ObjectId, ref: 'Language'},
})

const Descriptions = new Schema({
  descriptions: [Description],
})

export default Descriptions;