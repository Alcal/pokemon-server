import { Schema } from 'mongoose';
import Generation from '../Generation.schema.js';

const GenerationGameIndices = new Schema({
  game_indices: [{
    game_index: Number,
    generation: Generation,
  }],
})

export default GenerationGameIndices;