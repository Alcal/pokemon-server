import { Schema } from 'mongoose';

const ApiSchemaBase = new Schema({
  api_id: { type: Number, unique: true },
  name: { type: String, unique: true },
})

ApiSchemaBase.static('findOneByProxy', async function (query, options = {}) {
  const { id : api_id, name } = query;
  const { backfill = false } = options;
  const found = await this.findOne({ $or: [{ api_id }, { name }]});
  if(found) {
    return found;
  } else {
    const { byName } = this.schema.statics.getAPISource();
    const apiObject = await byName(api_id || name);
    console.log(apiObject);
    return apiObject
  }
});

export default ApiSchemaBase;