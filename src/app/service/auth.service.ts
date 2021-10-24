import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../users/user.interface';

let Admins: User[] = [
  {
    userId: 1,
    email: 'a@a.com',
    firstName: 'Hydrogen',
    lastName: 'cohen',
    password: '1234',
  },
];
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private admin$: BehaviorSubject<User[] | null> = new BehaviorSubject<
    User[] | null
  >(Admins);

  // activeAdmin: User | undefined;

  constructor(private router: Router) {}

  getUser() {
    return localStorage.getItem('admin');
  }

  private setUser(admin: User) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }

  login(loginUserEmail: string, loginUserPassword: string) {
    this.admin$.asObservable().subscribe((data: any) => {
      for (let admin of data) {
        if (admin.email === loginUserEmail) {
          if (admin.password === loginUserPassword) {
            this.router.navigateByUrl('/users');
            this.setUser(admin);
          } else {
            alert('Please check your password');
          }
        } else {
          alert('Please check your email ');
        }
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
