import { ExtractJwt, Strategy } from 'passport-jwt';
import User from '../models/user';

export default function passportInit(passport) {
    const secret = 'secret';
    let opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: secret
    };

    passport.use(new Strategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload._id, (err, user) => {
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

    opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt_admin'),
        secretOrKey: secret
    };

    passport.use(new Strategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload._id, (err, user) => {
            if (err) {
                return done(err, false);
            }

            if (user && user.role === 'ROLE_ADMIN') {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}
