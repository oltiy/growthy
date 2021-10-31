import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../state/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required]),
    status: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService) {}

  login() {
    if (this.loginForm.value.status === 'admin') {
      let loginUserEmail = this.loginForm.value.email;
      let loginUserPassword = this.loginForm.value.password;
      this.authService.login(loginUserEmail, loginUserPassword);
    } else {
      alert(
        'Currently, the project works only for admin, please choose admin option, and only between us. Admin email is a@a.com and the password is 1234'
      );
    }
  }
}
