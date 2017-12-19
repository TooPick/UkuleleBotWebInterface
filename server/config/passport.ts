import { ExtractJwt, Strategy } from 'passport-jwt';
import User from '../models/user';

export default function passportInit(passport) {
    const secret = process.env.SECRET_TOKEN;
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: secret
    };

    passport.use(new Strategy(opts, (jwt_payload, done) => {
        User.findOne({_id: jwt_payload.user._id}, (err, user) => {
            console.log(user);
            if (err) {
                return done(err, false);
            }

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}
