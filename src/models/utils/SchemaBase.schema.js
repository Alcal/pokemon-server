import { Schema } from 'mongoose';

const SchemaBase = new Schema({
  api_id: { type: Number, unique: true },
  name: { type: String, unique: true },
})

export default SchemaBase;