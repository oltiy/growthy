import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, AuthStore } from './auth.store';
import { users } from '../../users/user-personal.data';
import { User } from '../../users/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private authStore: AuthStore,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  setUser(user: User | null) {
    this.authStore.update((authState: AuthState) => {
      return { ...authState, user };
    });
  }

  async login(email: string, password: string) {
    const isUserExists = await users.find((admin) => admin.email === email);

    if (!isUserExists) {
      this.snackBar.open(
        'Please check that you entered the right email',
        'back'
      );
      this.router.navigateByUrl('/login');
    } else if (isUserExists.password === password) {
      this.setUser(isUserExists);
      this.router.navigateByUrl('/users');
    } else {
      this.snackBar.open(
        'Please check that you entered the right password',
        'back'
      );
      this.router.navigateByUrl('/login');
    }
  }
}
