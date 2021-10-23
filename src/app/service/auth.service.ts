import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../users/user.interface';

let Admins: User = {
  userId: 1,
  email: 'a@a.com',
  firstName: 'Hydrogen',
  lastName: 'cohen',
  password: '1234',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private admin$: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(Admins);

  // activeAdmin: User | undefined;

  constructor(private router: Router) {}

  getUser(): Observable<User | null> {
    return this.admin$.asObservable();
  }

  private setUser(admin: User | null) {
    this.admin$.next(admin);
  }

  login(loginUserEmail: string, loginUserPassword: string) {
    this.admin$.subscribe((admin) => {
      if (admin?.email === loginUserEmail) {
        if (admin.password === loginUserPassword) {
          this.setUser(admin);
        } else {
          alert('Please check your email ');
        }
      } else {
        alert('Please check your password');
      }
    });

    this.router.navigateByUrl('/users');
  }

  logout() {
    this.setUser(null);
    this.router.navigateByUrl('/login');
  }

  // private setUser(admin: User | undefined) {
  //   return admin;
  // }

  // loginAsAdmin(email: string, password: string) {
  //   Admins.filter((admin) => admin.email === email).map((admin: User) => {
  //     if (admin.password === password) {
  //       this.activeAdmin = this.setUser(admin);
  //       this.router.navigateByUrl('/admins');
  //     } else {
  //       alert('please check your password');
  //     }
  //   });
  // }

  // logout() {
  //   this.activeAdmin = undefined;
  //   this.router.navigateByUrl('/login');
  // }
}
