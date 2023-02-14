import { Schema } from 'mongoose';
import Item from './Item.schema.js';
import ChainLink from './utils/ChainLink.schema.js';
import SchemaBase from './utils/SchemaBase.schema.js';

const EvolutionChain = new Schema([SchemaBase, {
  baby_trigger_item: Item,
  chain: ChainLink,
}])

export default EvolutionChain;