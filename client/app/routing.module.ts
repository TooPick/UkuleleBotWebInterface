import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { AccountComponent } from './components/user/account/account.component';
import { AdminComponent } from './components/user/admin/home/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import {DashboardHomeComponent} from './components/dashboard/dashboard-home/dashboard-home.component';
import {AddUserComponent} from './components/user/admin/add-user/add-user.component';
import {DashboardPlaylistsComponent} from './components/dashboard/dashboard-playlists/dashboard-playlists.component';
import {DashboardAddPlaylistComponent} from './components/dashboard/dashboard-add-playlist/dashboard-add-playlist.component';
import {DashboardViewPlaylistComponent} from './components/dashboard/dashboard-view-playlist/dashboard-view-playlist.component';
import {DashboardAddSongComponent} from './components/dashboard/dashboard-add-song/dashboard-add-song.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
    { path: 'admin/user/add', component: AddUserComponent, canActivate: [AuthGuardAdmin] },
    { path: 'dashboard', component: DashboardHomeComponent, canActivate: [AuthGuardLogin] },
    { path: 'dashboard/playlists', component: DashboardPlaylistsComponent, canActivate: [AuthGuardLogin] },
    { path: 'dashboard/playlists/add', component: DashboardAddPlaylistComponent, canActivate: [AuthGuardLogin] },
    { path: 'dashboard/playlists/:id', component: DashboardViewPlaylistComponent, canActivate: [AuthGuardLogin] },
    { path: 'dashboard/playlists/:id/song/add', component: DashboardAddSongComponent, canActivate: [AuthGuardLogin] },
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: '/notfound' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class RoutingModule {}
