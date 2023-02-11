import { Schema } from 'mongoose';
import MoveDamageClass from './MoveDamageClass.schema.js';
import Names from './utils/Names.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const Type = new Schema([SchemaBase, Names, {
  move_damage_class: MoveDamageClass,
}])

Type.add({
  damage_relations: {
    double_damage_from: [Type],
    double_damage_to: [Type],
    half_damage_from: [Type],
    half_damage_to: [Type],
    no_damage_from: [Type],
    no_damage_to: [Type],
  }
});

export default Type;