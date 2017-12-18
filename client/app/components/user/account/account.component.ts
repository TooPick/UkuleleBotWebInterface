import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../../../shared/toast/toast.component';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/user.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from '../../../shared/validation/password-validation';
import {Router} from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

    user: User;
    isLoading = true;

    password = new FormControl('', [
        Validators.required
    ]);
    confirmPassword = new FormControl('', [
        Validators.required
    ]);

    changePasswordForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        public toast: ToastComponent,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getUser();
        this.changePasswordForm = this.formBuilder.group({
            password: this.password,
            confirmPassword: this.confirmPassword,
        }, {
            validator: PasswordValidation.MatchPassword
        });
    }

    getUser() {
        this.userService.getUser(this.auth.currentUser).subscribe(
            data => this.user = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    setClassPassword() {
        return { 'is-invalid': !this.password.pristine && !this.password.valid };
    }

    setClassConfirmPassword() {
        return { 'is-invalid': !this.confirmPassword.pristine && !this.confirmPassword.valid };
    }

    save(user: User) {
        this.user.password = this.password.value;
        this.userService.changePassword(user).subscribe(
            res => {
                this.toast.setMessage('Votre nouveau mot de passe a bien été enregistré !', 'success');
                this.router.navigate(['/dashboard']);
            },
            error => console.log(error)
        );
    }

}
