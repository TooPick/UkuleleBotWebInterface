import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {Song} from '../shared/models/song.model';

@Injectable()
export class SongService {

  constructor(private http: HttpClient) { }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>('/api/songs');
  }

  addSong(song: Song): Observable<Song> {
    return this.http.post<Song>('/api/songs', song);
  }

  getSong(song: Song): Observable<Song> {
    return this.http.get<Song>(`/api/songs/${song._id}`);
  }

  editSong(song: Song): Observable<string> {
    return this.http.put(`/api/songs/${song._id}`, song, { responseType: 'text' });
  }

  deleteSong(song: Song): Observable<string> {
    return this.http.delete(`/api/songs/${song._id}`, { responseType: 'text' });
  }

}
