import { Component, OnInit } from '@angular/core';
import {ToastComponent} from '../../../shared/toast/toast.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PlaylistService} from '../../../services/playlist.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-dashboard-add-playlist',
    templateUrl: './dashboard-add-playlist.component.html',
    styleUrls: ['./dashboard-add-playlist.component.scss']
})
export class DashboardAddPlaylistComponent implements OnInit {

    addPlaylistForm: FormGroup;
    name = new FormControl('', [
        Validators.required
    ]);

    constructor(
        public toast: ToastComponent,
        private formBuilder: FormBuilder,
        private playlistService: PlaylistService,
        private router: Router,
        private location: Location,
    ) { }

    ngOnInit() {
      this.addPlaylistForm = this.formBuilder.group({
          name: this.name
      });
    }

    setClassPassword() {
        return { 'is-invalid': !this.name.pristine && !this.name.valid };
    }

    back() {
      this.location.back();
    }

    savePlaylist() {
        console.log(this.addPlaylistForm.value);
        this.playlistService.add(this.addPlaylistForm.value).subscribe(
            res => {
                this.toast.setMessage('La playlist a bien été créée !', 'success');
                this.router.navigate(['/dashboard/playlists']);
            },
            err => {
                this.toast.setMessage('Une playlist avec le même nom existe déjà !', 'danger');
            }
        );
    }

}
