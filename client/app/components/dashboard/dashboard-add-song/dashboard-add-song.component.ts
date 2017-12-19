import { Component, OnInit } from '@angular/core';
import {ToastComponent} from '../../../shared/toast/toast.component';
import {Playlist} from '../../../shared/models/playlist.model';
import {PlaylistService} from '../../../services/playlist.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-dashboard-add-song',
    templateUrl: './dashboard-add-song.component.html',
    styleUrls: ['./dashboard-add-song.component.scss']
})
export class DashboardAddSongComponent implements OnInit {

    loading = true;
    playlist: Playlist;

    constructor(
        public toast: ToastComponent,
        private playlistService: PlaylistService,
        private route: ActivatedRoute,
    ) { }

    getPlaylist() {
        this.playlistService.getById({_id: this.route.snapshot.paramMap.get('id')}).subscribe(
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

    searchSong() {

    }
}
