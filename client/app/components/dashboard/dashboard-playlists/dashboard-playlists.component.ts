import { Component, OnInit } from '@angular/core';
import {ToastComponent} from '../../../shared/toast/toast.component';
import {Playlist} from '../../../shared/models/playlist.model';
import {PlaylistService} from '../../../services/playlist.service';

@Component({
    selector: 'app-dashboard-playlists',
    templateUrl: './dashboard-playlists.component.html',
    styleUrls: ['./dashboard-playlists.component.scss']
})
export class DashboardPlaylistsComponent implements OnInit {

    loading = true;
    playlists: Playlist[] = [];

    constructor(
        public toast: ToastComponent,
        private playlistService: PlaylistService,
    ) { }

    getPlaylists() {
        this.playlistService.getAll().subscribe(
            res => {
                this.playlists = res;
                this.loading = false;
            },
            err => console.error(err)
        );
    }

    ngOnInit() {
        this.getPlaylists();
    }

    deletePlaylist(playlist: Playlist) {
        this.playlistService.delete(playlist).subscribe(
            data => this.toast.setMessage('La playlist a bien été supprimée !', 'success'),
            error => console.log(error),
            () => this.getPlaylists()
        );
    }

}
