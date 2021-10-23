import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  addressForm = this.fb.group({
    email: [null, Validators.required, Validators.email],
    password: [null, Validators.required],
    status: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  Submit(): void {
    if (this.addressForm.value.status === 'admin') {
      let loginUserEmail = this.addressForm.value.email;
      let loginUserPassword = this.addressForm.value.password;
      this.auth.login(loginUserEmail, loginUserPassword);
    } else {
      alert(
        'Currently, the project works only for admin, please choose admin option, and only between us. Admin email is a@a.com and the password is 1234'
      );
    }
  }
}
