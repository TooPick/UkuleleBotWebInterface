import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import Song from '../models/Song';
import BaseCtrl from './base';

export default class SongCtrl extends BaseCtrl {
    model = Song;

    // Get all
    getAll = (req, res) => {
        this.model.find().lean()
            .populate('playlist')
            .exec((err, docs) => {
                if (err) { return console.error(err); }
                res.status(200).json(docs);
            });
    }

    // Get by id
    get = (req, res) => {
        this.model.findOne({ _id: req.params.id })
            .populate('playlist')
            .exec((err, item) => {
            if (err) { return console.error(err); }
            res.status(200).json(item);
        });
    }
}
