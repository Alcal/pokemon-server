import { Schema } from 'mongoose';
import Language from '../Language.schema.js';
import VersionGroup from '../VersionGroup.schema.js';

const FlavorTextEntries = new Schema({
  flavor_text_entries: [{
		flavor_text: String,
		language: Language,
		version_group: VersionGroup,
	}],
})

export default FlavorTextEntries;