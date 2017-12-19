import {BaseModel} from './base.model';
import {Playlist} from './playlist.model';

export class Song extends BaseModel {
  title?: string;
  url?: string;
  playlist?: Playlist;
}
