import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Song} from '../shared/models/song.model';
import {TokenService} from './token.service';
import {BaseService} from './base.service';

@Injectable()
export class SongService extends BaseService {
    api_url = 'api/songs';
}
