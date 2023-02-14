import { Schema } from 'mongoose';

const GenerationGameIndices = new Schema({
  game_indices: [{
    game_index: Number,
    generation: { type: Schema.Types.ObjectId, ref: 'Generation'},
  }],
})

export default GenerationGameIndices;