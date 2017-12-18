import {Song} from './song.model';

export class Playlist {
  _id?: string;
  name?: string;
  slug?: string;
  song?: Song[];
}
