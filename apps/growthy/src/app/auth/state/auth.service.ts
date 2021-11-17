import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, AuthStore } from './auth.store';
import { users } from '../../users/user-personal.data';
import { User } from '../../users/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private authStore: AuthStore, private router: Router) {}

  setUser(user: User | null) {
    this.authStore.update((authState: AuthState) => {
      return { ...authState, user };
    });
  }

  async login(loginUserEmail: string, loginUserPassword: string) {
    let loginStepA = await users.find(
      (admin) => admin.email === loginUserEmail
    );

    if (!loginStepA) {
      alert('Please check that you entered the right email ');
      this.router.navigateByUrl('/login');
    } else if (loginStepA.password === loginUserPassword) {
      this.setUser(loginStepA);
      this.router.navigateByUrl('/users');
    } else {
      alert('Please check that you entered the right password');
      this.router.navigateByUrl('/login');
    }
  }
}
