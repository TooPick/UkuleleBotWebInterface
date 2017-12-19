import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from '../shared/models/user.model';

import 'rxjs/add/operator/map';
import {TokenService} from './token.service';

@Injectable()
export class AuthService {
    loggedIn = false;
    isAdmin = false;

    currentUser: User = new User();

    constructor(
        private userService: UserService,
        private router: Router,
        private tokenService: TokenService
    ) {
        if (this.tokenService.token) {
            const decodedUser = this.tokenService.decodeUserFromToken(this.tokenService.token);
            this.setCurrentUser(decodedUser);
        }
    }

    login(emailAndPassword) {
        return this.userService.login(emailAndPassword).map(
            res => {
                this.tokenService.setToken(res.token);
                const decodedUser = this.tokenService.decodeUserFromToken(this.tokenService.token);
                this.setCurrentUser(decodedUser);
                return this.loggedIn;
            }
        );
    }

    logout() {
        this.tokenService.removeToken();
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = new User();
        this.router.navigate(['/']);
    }

    setCurrentUser(decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'ROLE_ADMIN' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    }

}
