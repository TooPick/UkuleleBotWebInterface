import * as youtubeS from 'youtube-search';

export default class YoutubeCtrl {

    youtubeSearch = (req, res) => {
            const opts = {
                maxResults: req.body.maxResults,
                key: process.env.YOUTUBE_API_KEY,
                type: 'video',
            };

            youtubeS(req.body.query, opts, (err, results) => {
                if (err) { return console.error(err); }

                res.status(200).json(results);
            });
    }

}
