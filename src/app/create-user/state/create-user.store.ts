import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { users } from 'src/app/users/user-personal.data';
import { User } from 'src/app/users/user.interface';

export interface CreateUserState {
  user: User[];
}

export function createInitialState(): CreateUserState {
  return {
    user: users,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'create-user' })
export class CreateUserStore extends Store<CreateUserState> {
  constructor() {
    super(createInitialState());
  }
}
