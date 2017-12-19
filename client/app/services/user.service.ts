import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/models/user.model';
import {AuthService} from './auth.service';
import {TokenService} from './token.service';

@Injectable()
export class UserService {

  constructor(
      private http: HttpClient,
      private tokenService: TokenService
  ) { }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user, { headers: this.tokenService.getAuthorizationHeader() });
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users', { headers: this.tokenService.getAuthorizationHeader() });
  }

  countUsers(): Observable<number> {
    return this.http.get<number>('/api/users/count', { headers: this.tokenService.getAuthorizationHeader() });
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user, { headers: this.tokenService.getAuthorizationHeader() });
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(`/api/user/${user._id}`, { headers: this.tokenService.getAuthorizationHeader() });
  }

  editUser(user: User): Observable<string> {
    return this.http.put(`/api/user/${user._id}`, user, { headers: this.tokenService.getAuthorizationHeader(), responseType: 'text' });
  }

  deleteUser(user: User): Observable<string> {
    return this.http.delete(`/api/user/${user._id}`, { headers: this.tokenService.getAuthorizationHeader(), responseType: 'text' });
  }

  changePassword(user: User): Observable<string> {
    return this.http.patch(`/api/user/${user._id}/changePassword`, user, { headers: this.tokenService.getAuthorizationHeader(), responseType: 'text' });
  }

}
