import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Song} from '../shared/models/song.model';
import {AuthService} from './auth.service';
import {TokenService} from './token.service';

@Injectable()
export class SongService {

  constructor(
      private http: HttpClient,
      private tokenService: TokenService
  ) { }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>('/api/songs', { headers: this.tokenService.getAuthorizationHeader() });
  }

  addSong(song: Song): Observable<Song> {
    return this.http.post<Song>('/api/songs', song, { headers: this.tokenService.getAuthorizationHeader() });
  }

  getSong(song: Song): Observable<Song> {
    return this.http.get<Song>(`/api/songs/${song._id}`, { headers: this.tokenService.getAuthorizationHeader() });
  }

  editSong(song: Song): Observable<string> {
    return this.http.put(`/api/songs/${song._id}`, song, { headers: this.tokenService.getAuthorizationHeader(), responseType: 'text' });
  }

  deleteSong(song: Song): Observable<string> {
    return this.http.delete(`/api/songs/${song._id}`, { headers: this.tokenService.getAuthorizationHeader(), responseType: 'text' });
  }

}
