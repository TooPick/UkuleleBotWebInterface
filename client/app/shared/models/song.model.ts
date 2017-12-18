import {Playlist} from './playlist.model';

export class Song {
  _id?: string;
  title?: string;
  url?: string;
  playlist?: Playlist;
}
