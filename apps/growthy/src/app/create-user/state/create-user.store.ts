import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { users } from '../../users/user-personal.data';
import { User } from '../../users/user.interface';

export interface CreateUserState {
  users: User[];
}

export function createInitialState(): CreateUserState {
  return {
    users: users,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'create-user' })
export class CreateUserStore extends Store<CreateUserState> {
  constructor() {
    super(createInitialState());
  }
}
