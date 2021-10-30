import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
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
  isLoggedIn: boolean = false;
  isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn);
  constructor(private router: Router) {}

  getAdmin() {
    return localStorage.getItem('admin');
  }

  private setAdmin(admin: User) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  // option 1
  // login(loginUserEmail: string, loginUserPassword: string) {
  //   this.admin$.asObservable().subscribe((data: any) => {
  //     for (let admin of data) {
  //       if (admin.email === loginUserEmail) {
  //         if (admin.password === loginUserPassword) {
  //           this.router.navigateByUrl('/users');
  //           this.setAdmin(admin);
  //         } else {
  //           alert('Please check that you entered the right password);
  //         }
  //       } else {
  //         alert('Please check that you entered the right email ');
  //       }
  //     }
  //   });
  // }
  // option 2
  async login(loginUserEmail: string, loginUserPassword: string) {
    await Admins.find((admin) => {
      if (admin.email === loginUserEmail) {
        if (admin.password === loginUserPassword) {
          this.setAdmin(admin);
          this.isLoggedIn$.next(true);
          this.router.navigateByUrl('/users');
        } else {
          alert('Please check that you entered the right password');
          this.isLoggedIn$.next(false);
          this.router.navigateByUrl('/login');
        }
      } else {
        alert('Please check that you entered the right email ');
        this.isLoggedIn$.next(false);
        this.router.navigateByUrl('/login');
      }
    });
  }

  logout() {
    localStorage.clear();

    this.router.navigateByUrl('/login');
  }
}
