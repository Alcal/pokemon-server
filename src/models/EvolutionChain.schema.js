import { Schema } from 'mongoose';
import Item from './Item.schema.js';
import ChainLink from './utils/ChainLink.schema.js';
import ApiSchemaBase from './utils/ApiSchemaBase.schema.js';

const EvolutionChain = new Schema([ApiSchemaBase, {
  baby_trigger_item: Item,
  chain: ChainLink,
}])

export default EvolutionChain;