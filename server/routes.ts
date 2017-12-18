import * as express from 'express';

import UserCtrl from './controllers/user';
import User from './models/user';
import PlaylistCtrl from './controllers/playlist';
import SongCtrl from './controllers/song';

export default function setRoutes(app) {

    const router = express.Router();

    const userCtrl = new UserCtrl();
    const playlistCtrl = new PlaylistCtrl();
    const songCtrl = new SongCtrl();

    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id/changePassword').patch(userCtrl.changePassword);
    router.route('/user/:id').delete(userCtrl.delete);

    // Playlist
    router.route('/playlists').get(playlistCtrl.getAll);
    router.route('/playlists').post(playlistCtrl.insert);
    router.route('/playlists/:id').get(playlistCtrl.get);
    router.route('/playlists/:id').delete(playlistCtrl.delete);
    router.route('/playlists/:id').put(playlistCtrl.update);
    router.route('/playlists/count').get(playlistCtrl.count);

    // Song
    router.route('/songs').get(songCtrl.getAll);
    router.route('/songs').post(songCtrl.insert);
    router.route('/songs/:id').get(songCtrl.get);
    router.route('/songs/:id').delete(songCtrl.delete);
    router.route('/songs/:id').put(songCtrl.update);
    router.route('/songs/count').get(songCtrl.count);

    // Apply the routes to our application with the prefix /api
    app.use('/api', router);

}
