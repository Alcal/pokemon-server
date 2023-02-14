import { Schema } from 'mongoose';

const FlavorTextEntries = new Schema({
  flavor_text_entries: [{
		flavor_text: String,
		language: { type: Schema.Types.ObjectId, ref: 'Language'},
		version_group: { type: Schema.Types.ObjectId, ref: 'VersionGroup'},
	}],
})

export default FlavorTextEntries;