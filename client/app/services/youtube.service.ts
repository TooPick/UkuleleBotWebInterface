import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from './token.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class YoutubeService {

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) {
    }

    youtubeSearch(keywords): Observable<any> {
        return this.http.post<any>('/api/youtube/search', keywords, {
            headers: this.tokenService.getAuthorizationHeader()
        });
    }
}
