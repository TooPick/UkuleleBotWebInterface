import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Playlist} from '../shared/models/playlist.model';
import {AuthService} from './auth.service';
import {TokenService} from './token.service';

@Injectable()
export class PlaylistService {

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) { }

    getPlaylists(): Observable<Playlist[]> {
        return this.http.get<Playlist[]>('/api/playlists', { headers: this.tokenService.getAuthorizationHeader() });
    }

    addPlaylist(playlist: Playlist): Observable<Playlist> {
        return this.http.post<Playlist>('/api/playlists', playlist, { headers: this.tokenService.getAuthorizationHeader() });
    }

    getPlaylist(playlist: Playlist): Observable<Playlist> {
        return this.http.get<Playlist>(`/api/playlists/${playlist._id}`, { headers: this.tokenService.getAuthorizationHeader() });
    }

    editPlaylist(playlist: Playlist): Observable<string> {
        return this.http.put(`/api/playlists/${playlist._id}`, playlist, {
            headers: this.tokenService.getAuthorizationHeader(),
            responseType: 'text'
        });
    }

    deletePlaylist(playlist: Playlist): Observable<string> {
        return this.http.delete(`/api/playlists/${playlist._id}`, {
            headers: this.tokenService.getAuthorizationHeader(),
            responseType: 'text'
        });
    }

}
