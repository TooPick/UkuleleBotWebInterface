import * as express from 'express';
import * as passport from 'passport';
import roleAuthorisation from './config/roleAuthorization';

import UserCtrl from './controllers/user';
import PlaylistCtrl from './controllers/playlist';
import SongCtrl from './controllers/song';
import YoutubeCtrl from './controllers/youtube';

export default function setRoutes(app) {

    // Passports
    const passportUser = passport.authenticate('jwt', {session: false});

    const router = express.Router();

    const userCtrl = new UserCtrl();
    const playlistCtrl = new PlaylistCtrl();
    const songCtrl = new SongCtrl();
    const youtubeCtrl = new YoutubeCtrl();

    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(passportUser, userCtrl.getAll);
    router.route('/users/count').get(passportUser, userCtrl.count);
    router.route('/user').post(passportUser, roleAuthorisation(['ROLE_ADMIN']), userCtrl.insert);
    router.route('/user/:id').get(passportUser, userCtrl.get);
    router.route('/user/:id').put(passportUser, userCtrl.update);
    router.route('/user/:id/changePassword').patch(passportUser, userCtrl.changePassword);
    router.route('/user/:id').delete(passportUser, roleAuthorisation(['ROLE_ADMIN']), userCtrl.delete);

    // Playlist
    router.route('/playlists').get(passportUser, playlistCtrl.getAll);
    router.route('/playlists').post(passportUser, playlistCtrl.insert);
    router.route('/playlists/slug/:slug').get(passportUser, playlistCtrl.getBySlug);
    router.route('/playlists/:id').get(passportUser, playlistCtrl.get);
    router.route('/playlists/:id').delete(passportUser, playlistCtrl.delete);
    router.route('/playlists/:id').put(passportUser, playlistCtrl.update);
    router.route('/playlists/count').get(passportUser, playlistCtrl.count);

    // Song
    router.route('/songs').get(passportUser, songCtrl.getAll);
    router.route('/songs').post(passportUser, songCtrl.insert);
    router.route('/songs/:id').get(passportUser, songCtrl.get);
    router.route('/songs/:id').delete(passportUser, songCtrl.delete);
    router.route('/songs/:id').put(passportUser, songCtrl.update);
    router.route('/songs/count').get(passportUser, songCtrl.count);

    // Youtube Search
    router.route('/youtube/search').post(passportUser, youtubeCtrl.youtubeSearch);

    // Apply the routes to our application with the prefix /api
    app.use('/api', router);

}
