import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CreateUserStore, CreateUserState } from './create-user.store';

@Injectable({ providedIn: 'root' })
export class CreateUserQuery extends Query<CreateUserState> {
  userData$ = this.select('users');

  constructor(protected store: CreateUserStore) {
    super(store);
  }
}
