import User from '../models/user';

export default function roleAuthorization(roles) {

    return function(req, res, next) {
        const user = req.user;
        User.findOne({ _id: user._id }, (err, item) => {
            if (err) {
                res.status(402).json({ error: 'User not found.'});
                return next(err);
            }

            if (roles.indexOf(item.role) > -1) {
                return next();
            }

            return next(res.sendStatus(401));
        });
    };
}
