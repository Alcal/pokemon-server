import { Schema } from 'mongoose';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';
import Names from './utils/Names.schema.js';

const Type = new Schema([ApiSchemaBase, Names, {
  move_damage_class: { type: Schema.Types.ObjectId, ref: 'MoveDamageClass'},
  damage_relations: {
    double_damage_from: [{ type: Schema.Types.ObjectId, ref: 'Type'}],
    double_damage_to: [{ type: Schema.Types.ObjectId, ref: 'Type'}],
    half_damage_from: [{ type: Schema.Types.ObjectId, ref: 'Type'}],
    half_damage_to: [{ type: Schema.Types.ObjectId, ref: 'Type'}],
    no_damage_from: [{ type: Schema.Types.ObjectId, ref: 'Type'}],
    no_damage_to: [{ type: Schema.Types.ObjectId, ref: 'Type'}],
  }
}]);

export default Type;