import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { AccountComponent } from './components/user/account/account.component';
import { AdminComponent } from './components/user/admin/home/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { AddUserComponent } from './components/user/admin/add-user/add-user.component';
import { DashboardPlaylistsComponent } from './components/dashboard/dashboard-playlists/dashboard-playlists.component';
import {PlaylistService} from './services/playlist.service';
import { DashboardAddPlaylistComponent } from './components/dashboard/dashboard-add-playlist/dashboard-add-playlist.component';
import { DashboardViewPlaylistComponent } from './components/dashboard/dashboard-view-playlist/dashboard-view-playlist.component';
import { DashboardAddSongComponent } from './components/dashboard/dashboard-add-song/dashboard-add-song.component';
import {SongService} from './services/song.service';
import {TokenService} from './services/token.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        AccountComponent,
        AdminComponent,
        NotFoundComponent,
        NavbarComponent,
        DashboardHomeComponent,
        AddUserComponent,
        DashboardPlaylistsComponent,
        DashboardAddPlaylistComponent,
        DashboardViewPlaylistComponent,
        DashboardAddSongComponent,
    ],
    imports: [
        RoutingModule,
        SharedModule
    ],
    providers: [
        AuthService,
        AuthGuardLogin,
        AuthGuardAdmin,
        UserService,
        PlaylistService,
        SongService,
        TokenService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})

export class AppModule { }
