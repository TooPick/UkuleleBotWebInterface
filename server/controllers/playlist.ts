import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Playlist from '../models/Playlist';
import BaseCtrl from './base';
import Song from '../models/song';

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
                for (const song of item.songs) {
                    song.remove();
                }

                item.remove((error) => {
                    if (error) { return console.error(error); }

                    res.sendStatus(200);
                });
            });
    }
}
