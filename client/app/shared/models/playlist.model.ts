import {BaseModel} from './base.model';
import {Song} from './song.model';

export class Playlist extends BaseModel {
  name?: string;
  slug?: string;
  song?: Song[];
}
