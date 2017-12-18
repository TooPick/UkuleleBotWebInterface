import * as mongoose from 'mongoose';
import * as idvalidator from 'mongoose-id-validator';
const Schema = mongoose.Schema;

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true,
    },
    playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' },
});

songSchema.plugin(idvalidator);

const Song = mongoose.model('Song', songSchema);

export default Song;
