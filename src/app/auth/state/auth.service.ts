import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { AuthState, AuthStore } from './auth.store';
import { AuthQuery } from './auth.query';
import { Observable } from 'rxjs';
import { User } from '../../users/user.interface';

let Admins: User[] = [
  {
    userId: 1,
    email: 'a@a.com',
    firstName: 'Hydrogen',
    lastName: 'cohen',
    password: '1234',
  },
  {
    userId: 2,
    email: 'b@b.com',
    firstName: 'Helium',
    lastName: 'levi',
    password: '5678',
  },
  {
    userId: 3,
    email: 'c@c.com',
    firstName: 'Lithium',
    lastName: 'yair',
    password: '9876',
  },
  {
    userId: 4,
    email: 'd@d.com',
    firstName: 'Beryllium',
    lastName: 'assaf',
    password: '5432',
  },
  {
    userId: 5,
    email: 'e@e.com',
    firstName: 'Boron',
    lastName: 'gorn',
    password: '0000',
  },
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private authStore: AuthStore,
    private router: Router,
    private authQuery: AuthQuery
  ) {}

  setUser(user: User | null) {
    this.authStore.update((authState: AuthState) => {
      return { ...authState, user };
    });
  }

  async login(loginUserEmail: string, loginUserPassword: string) {
    let loginStepA = await Admins.find(
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
