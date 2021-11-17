import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users/state/users.service';
import { CreateUserService } from './state/create-user.service';
import { CreateUserQuery } from './state/create-user.query';
import { map } from 'rxjs/operators';

@Component({
  selector: 'growthy-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  addressForm = new FormGroup({
    userId: new FormControl(''),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(
      null,
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),

    phoneNumber: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ])
    ),
  });

  constructor(
    private createUserService: CreateUserService,
    private usersService: UsersService,
    private router: Router,
    private createUserQuery: CreateUserQuery
  ) {}

  onSubmit(): void {
    const newUser = this.addressForm.value;
    this.createUserQuery.userData$
      .pipe(
        map((data) => {
          data.filter((user) => {
            if (user.email === newUser.email) {
              this.addressForm.reset();
              return;
            }
          });
        })
      )
      .subscribe();
    if (this.addressForm.value.email != null) {
      console.log(this.addressForm.value);
      this.usersService.updateUserStatus(this.addressForm.value);
      this.createUserService.registration(this.addressForm.value);
      this.router.navigateByUrl('/users');
    } else {
      alert('this email is registered before');
    }
  }
}
