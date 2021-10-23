import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../users/user.interface';

let Users: User[] = [
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

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users$ = new Subject<User[]>();

  constructor() {}

  getUsers(): void {
    this.users$.next(Users);
  }
  getUser(email: string) {
    Users.filter((user) => user.email === email).map((user) => {
      return user;
    });
  }
  addUser(user: User): void {
    Users = [...Users, user];
    this.users$.next(Users);
  }
  deleteUser(userId: number) {
    Users.filter((user) => user.userId !== userId);
    this.users$.next(Users);
  }
  updateUser(updateUser: User) {
    Users.find((user) => {
      if (user.userId === updateUser.userId) {
        user.email = updateUser.email;
        user.firstName = updateUser.firstName;
        user.lastName = updateUser.lastName;
        user.password = updateUser.password;
      }
    });
    this.users$.next(Users);
  }
}
