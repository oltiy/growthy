import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { userData } from '../user-status-data';
import { UserStatus } from '../user-status.interface';

export interface UsersState {
  users: UserStatus[];
}

export function createInitialState(): UsersState {
  return {
    users: userData,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends Store<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
