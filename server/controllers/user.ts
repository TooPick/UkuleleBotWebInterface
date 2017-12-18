import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
    model = User;

    login = (req, res) => {
        this.model.findOne({ username: req.body.username }, (err, user) => {
            if (!user) { return res.sendStatus(403); }
            user.comparePassword(req.body.password, (error, isMatch) => {
                if (!isMatch) { return res.sendStatus(403); }
                const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                res.status(200).json({ token: token });
            });
        });
    }

    changePassword = (req, res) => {
        const user = new User(req.body);
        user.hashPassword(user.password, (error, hash) => {
            if (error) { return console.log (error); }
            user.password = hash;
            this.model.update(user, (err) => {
                if (err) { return console.error(err); }

                res.sendStatus(200);
            });
        });
    }

}