import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class TokenService {

    token = null;
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(
    ) {
        this.token = localStorage.getItem('token');
    }

    setToken(token) {
        this.token = token;
        localStorage.setItem('token', this.token);
    }

    decodeUserFromToken(token) {
        return this.jwtHelper.decodeToken(token).user;
    }

    removeToken() {
        this.token = null;
        localStorage.removeItem('token');
    }

    getAuthorizationHeader() {
        return new HttpHeaders().set('Authorization', this.token);
    }
}
