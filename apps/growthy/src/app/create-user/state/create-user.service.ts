import { Injectable } from '@angular/core';

import { CreateUserQuery } from './create-user.query';
import { User } from '../../users/user.interface';
import { CreateUserStore } from './create-user.store';

@Injectable({ providedIn: 'root' })
export class CreateUserService {
  constructor(
    private usersStore: CreateUserStore,

    private createUserQuery: CreateUserQuery
  ) {}

  registerUser(users: User[]) {
    this.usersStore.update((store) => {
      return { ...store, users };
    });
  }
  async registration(newUser: User) {
    let usersUpdate: User[] = [];
    await this.createUserQuery.userData$.subscribe((data) => {
      newUser.userId = data.length;
      usersUpdate = [...data, newUser];
      console.log(usersUpdate);
    });
    this.registerUser(usersUpdate);
  }
}
