import Playlist from '../models/Playlist';
import BaseCtrl from './base';

export default class PlaylistCtrl extends BaseCtrl {
    model = Playlist;

    // Get all
    getAll = (req, res) => {
        this.model.find().lean()
            .populate('songs')
            .exec((err, docs) => {
                if (err) { return console.error(err); }
                res.status(200).json(docs);
            });
    }

    // Get by id
    get = (req, res) => {
        this.model.findOne({ _id: req.params.id })
            .lean()
            .populate('songs')
            .exec((err, item) => {
                if (err) { return console.error(err); }
                res.status(200).json(item);
            });
    }

    // Delete by id
    delete = (req, res) => {
        this.model.findOne({ _id: req.params.id })
            .lean()
            .populate('songs')
            .exec((err, item) => {
                if (err) { return console.error(err); }

                if (item) {
                    for (const song of item.songs) {
                        this.model.remove({ _id: song._id });
                    }
                    this.model.remove({ _id: item._id }, (error) => {
                        if (error) { return console.error(error); }

                        res.sendStatus(200);
                    });
                }
            });
    }
}
