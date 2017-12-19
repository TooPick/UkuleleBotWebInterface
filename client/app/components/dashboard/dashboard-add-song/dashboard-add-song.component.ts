import { Component, OnInit } from '@angular/core';
import {ToastComponent} from '../../../shared/toast/toast.component';
import {Playlist} from '../../../shared/models/playlist.model';
import {PlaylistService} from '../../../services/playlist.service';
import {ActivatedRoute} from '@angular/router';
import {YoutubeService} from '../../../services/youtube.service';
import {SongService} from '../../../services/song.service';
import * as url from 'url';
import {Song} from '../../../shared/models/song.model';
import {Location} from '@angular/common';

@Component({
    selector: 'app-dashboard-add-song',
    templateUrl: './dashboard-add-song.component.html',
    styleUrls: ['./dashboard-add-song.component.scss']
})
export class DashboardAddSongComponent implements OnInit {

    playlist: Playlist;
    results: any = null;
    keywords: String = null;

    constructor(
        public toast: ToastComponent,
        private playlistService: PlaylistService,
        private route: ActivatedRoute,
        private youtubeService: YoutubeService,
        private songService: SongService,
        private location: Location
    ) { }

    getPlaylist() {
        this.playlistService.getById({_id: this.route.snapshot.paramMap.get('id')}).subscribe(
            res => {
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

    resetSearch() {
        this.results = null;
        this.keywords = null;
    }

    searchSong() {
        this.keywords = this.keywords.trim();

        if (this.keywords !== '') {
            this.youtubeService.youtubeSearch({
                query: this.keywords,
                maxResults: 10
            }).subscribe(
                res => {
                    this.results = res;
                    this.toast.setMessage('Recherche terminée !', 'success');
                },
                err => {
                    this.toast.setMessage('Une erreur est survenue !', 'danger');
                }
            );
        }

    }

    addSong(song: any) {
        this.resetSearch();
        const songItem = new Song();
        songItem.title = song.title;
        songItem.url = song.link;
        songItem.playlist = this.playlist;
        this.songService.add(songItem).subscribe(
            res => {
                this.toast.setMessage('Chanson ajoutée !', 'success');
                this.back();
            },
            err => {
                this.toast.setMessage('Une erreur est survenue !', 'danger');
            }
        );
    }
}
