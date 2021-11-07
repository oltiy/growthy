import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { UsersService } from 'src/app/users/state/users.service';
import { users } from 'src/app/users/user-personal.data';
import { userData } from 'src/app/users/user-status-data';
import { UserStatus } from 'src/app/users/user-status.interface';
import { CreateUserQuery } from './create-user.query';
import { User } from 'src/app/users/user.interface';
import { CreateUserState, CreateUserStore } from './create-user.store';

@Injectable({ providedIn: 'root' })
export class CreateUserService {
  constructor(
    private createUserStore: CreateUserStore,
    private createUserQuery: CreateUserQuery,
    private usersService: UsersService
  ) {}

  addUserToUsersData(user: User[]) {
    this.createUserStore.update((createUserState: CreateUserState) => {
      return { ...createUserState, user };
    });
  }
  registration(newUser: User) {
    let usersUpdate: User[];
    this.createUserQuery.userData$.subscribe((data) => {
      let checkIfTheUserNew = data.filter(
        (user) => user.email === newUser.email
      );
      if (checkIfTheUserNew.length === 0) {
        newUser.userId = data.length + 1;
        usersUpdate = [...data, newUser];
        console.log(usersUpdate);
      }
    });
    this.addUserToUsersData(usersUpdate!);
  }
}
