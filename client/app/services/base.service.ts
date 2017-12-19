import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {TokenService} from './token.service';
import {BaseModel} from '../shared/models/base.model';

@Injectable()
export abstract class BaseService {
    api_url = 'api/';
    header_token = this.tokenService.getAuthorizationHeader();

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
    ) {
    }

    getAll(): Observable<BaseModel[]> {
        return this.http.get<BaseModel[]>(this.api_url, {
            headers: this.header_token
        });
    }

    add(item: BaseModel): Observable<BaseModel> {
        return this.http.post<BaseModel>(this.api_url, item, {
            headers: this.header_token
        });
    }

    getById(item: BaseModel): Observable<BaseModel> {
        return this.http.get<BaseModel>(`${this.api_url}/${item._id}`, {
            headers: this.header_token
        });
    }

    edit(item: BaseModel): Observable<string> {
        return this.http.put(`${this.api_url}/${item._id}`, item, {
            headers: this.header_token,
            responseType: 'text'
        });
    }

    delete(item: BaseModel): Observable<string> {
        return this.http.delete(`${this.api_url}/${item._id}`, {
            headers: this.header_token,
            responseType: 'text'
        });
    }

}
