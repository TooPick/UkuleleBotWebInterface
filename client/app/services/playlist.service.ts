import { Injectable } from '@angular/core';
import {BaseService} from './base.service';

@Injectable()
export class PlaylistService extends BaseService {
    api_url = 'api/playlists';
}
