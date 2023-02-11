import { Schema } from 'mongoose';

const SchemaBase = new Schema({
  api_id: Number,
  name: String,
})

export default SchemaBase;