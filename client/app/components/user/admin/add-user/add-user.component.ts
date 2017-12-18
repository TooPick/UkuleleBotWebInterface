import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastComponent} from "../../../../shared/toast/toast.component";
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

    userCreationForm: FormGroup;
    username = new FormControl('', [
        Validators.required,
    ]);
    password = new FormControl('', [
        Validators.required,
    ]);
    role = new FormControl('', [
        Validators.required,
        Validators.pattern('ROLE_USER|ROLE_ADMIN')
    ]);

    constructor(
        private formBuilder: FormBuilder,
        public toast: ToastComponent,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.userCreationForm = this.formBuilder.group({
            username: this.username,
            password: this.password,
            role: this.role
        });
    }

    setClassUsername() {
        return { 'is-invalid': !this.username.pristine && !this.username.valid };
    }

    setClassPassword() {
        return { 'is-invalid': !this.password.pristine && !this.password.valid };
    }

    setClassRole() {
        return { 'is-invalid': !this.role.pristine && !this.role.valid };
    }

    createUser() {
        this.userService.register(this.userCreationForm.value).subscribe(
            res => {
                this.toast.setMessage('Votre nouveau mot de passe a bien été enregistré !', 'success');
                this.router.navigate(['/admin']);
            },
            error => console.log(error)
        );
    }

}
