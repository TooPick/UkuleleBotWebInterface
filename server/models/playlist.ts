import * as mongoose from 'mongoose';
import * as slug from 'slug';
const Schema = mongoose.Schema;

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: false,
        unique: true,
    }
});

playlistSchema.virtual('songs', {
    ref: 'Song',
    localField: '_id',
    foreignField: 'playlist'
});

playlistSchema.pre('save', function(next) {
    const playlist = this;
    playlist.slug = slug(playlist.name, {lower: true});
    next();
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;
