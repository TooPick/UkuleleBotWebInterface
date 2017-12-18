import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Playlist} from '../shared/models/playlist.model';

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>('/api/playlists');
  }

  addPlaylist(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>('/api/playlists', playlist);
  }

  getPlaylist(playlist: Playlist): Observable<Playlist> {
    return this.http.get<Playlist>(`/api/playlists/${playlist._id}`);
  }

  editPlaylist(playlist: Playlist): Observable<string> {
    return this.http.put(`/api/playlists/${playlist._id}`, playlist, { responseType: 'text' });
  }

  deletePlaylist(playlist: Playlist): Observable<string> {
    return this.http.delete(`/api/playlists/${playlist._id}`, { responseType: 'text' });
  }

}
