import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Playlist} from '../../../shared/models/playlist.model';
import {ToastComponent} from '../../../shared/toast/toast.component';
import {PlaylistService} from '../../../services/playlist.service';
import {ActivatedRoute} from '@angular/router';
import {Song} from '../../../shared/models/song.model';
import {SongService} from '../../../services/song.service';

@Component({
    selector: 'app-dashboard-view-playlist',
    templateUrl: './dashboard-view-playlist.component.html',
    styleUrls: ['./dashboard-view-playlist.component.scss']
})
export class DashboardViewPlaylistComponent implements OnInit {

    loading = true;
    playlist: Playlist;

    constructor(
        public toast: ToastComponent,
        private location: Location,
        private playlistService: PlaylistService,
        private songService: SongService,
        private route: ActivatedRoute,
    ) { }

    getPlaylist() {
        this.playlistService.getPlaylist({_id: this.route.snapshot.paramMap.get('id')}).subscribe(
            res => {
                this.loading = false;
                this.playlist = res;
            },
            err => {
                console.error(err);
            }
        );
    }

    ngOnInit() {
      this.getPlaylist();
    }

    back() {
        this.location.back();
    }

    deleteSong(song: Song) {
        this.songService.deleteSong(song).subscribe(
            res => {
                this.toast.setMessage('La chanson a bien été supprimée de la playlist !', 'success');
                this.getPlaylist();
            },
            err => {
                this.toast.setMessage('Une erreur est survenue !', 'danger');
            }
        );
    }
}
