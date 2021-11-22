import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users/state/users.service';
import { CreateUserService } from './state/create-user.service';
import { CreateUserQuery } from './state/create-user.query';
import { map, take, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'growthy-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  userForm = new FormGroup({
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
    private usersService: CreateUserService,
    private projectsService: UsersService,
    private router: Router,
    private usersQuery: CreateUserQuery,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    const newUser = this.userForm.value;
    this.usersQuery.userData$
      .pipe(
        tap((users) => {
          const isExist = users.find((u) => u.email === newUser.email);
          if (isExist) {
            this.userForm.reset();
            this.snackBar.open('this email is registered before', 'back', {
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            return;
          }

          if (this.userForm.value.email != null) {
            console.log(this.userForm.value);
            // this.projectsService.updateUserStatus(this.userForm.value);
            this.usersService.registration(this.userForm.value);
            this.router.navigateByUrl('/users');
          } else {
            this.snackBar.open('this email is registered before', 'back');
          }
        }),
        take(1)
      )
      .subscribe();
  }
}
