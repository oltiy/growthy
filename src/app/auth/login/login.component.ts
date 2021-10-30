import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';

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

  constructor(private auth: AuthService) {}

  isLoggedIn$: Observable<boolean> = this.auth.isLoggedIn$;

  login(): void {
    if (this.loginForm.value.status === 'admin') {
      let loginUserEmail = this.loginForm.value.email;
      let loginUserPassword = this.loginForm.value.password;
      this.auth.login(loginUserEmail, loginUserPassword);
    } else {
      alert(
        'Currently, the project works only for admin, please choose admin option, and only between us. Admin email is a@a.com and the password is 1234'
      );
    }
  }
}
