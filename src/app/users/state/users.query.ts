import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UsersStore, UsersState } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends Query<UsersState> {
  selectUsers$ = this.select('users');
  constructor(protected store: UsersStore) {
    super(store);
  }
}
