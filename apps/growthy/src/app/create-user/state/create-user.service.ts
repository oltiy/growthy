import { Injectable } from '@angular/core';

import { CreateUserQuery } from './create-user.query';
import { User } from '../../users/user.interface';
import { CreateUserState, CreateUserStore } from './create-user.store';

@Injectable({ providedIn: 'root' })
export class CreateUserService {
  constructor(
    private createUserStore: CreateUserStore,
    private createUserQuery: CreateUserQuery
  ) {}

  addUserToUsersData(user: User[]) {
    this.createUserStore.update((createUserState: CreateUserState) => {
      return { ...createUserState, user };
    });
  }
  registration(newUser: User) {
    let usersUpdate: User[];
    this.createUserQuery.userData$.subscribe((data) => {
      const checkIfTheUserNew = data.filter(
        (user) => user.email === newUser.email
      );
      if (checkIfTheUserNew.length === 0) {
        newUser.userId = data.length + 1;
        usersUpdate = [...data, newUser];
        console.log(usersUpdate);
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.addUserToUsersData(usersUpdate!);
  }
}
