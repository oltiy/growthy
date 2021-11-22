/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { UserStatus } from '../user-status.interface';
import { UsersState, UsersStore } from './users.store';
import { UsersQuery } from './users.query';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private usersStore: UsersStore, private usersQuery: UsersQuery) {}
  addToUsersStauts(users: UserStatus[]) {
    this.usersStore.update((userState: UsersState) => {
      return { ...userState, users };
    });
  }

  updateUserStatus(addNewUser: UserStatus) {
    let usersUpdate: UserStatus[];
    this.usersQuery.selectUsers$.subscribe((data) => {
      const checkIfTheUserNew = data.filter(
        (user) => user.email === addNewUser.email
      );
      if (checkIfTheUserNew.length === 0) {
        addNewUser.userId = data.length + 1;
        usersUpdate = [...data, addNewUser];
        console.log(data);
      }
    });
    this.addToUsersStauts(usersUpdate!);
  }
}
