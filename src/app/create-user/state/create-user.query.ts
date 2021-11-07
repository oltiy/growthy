import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { users } from 'src/app/users/user-personal.data';
import { CreateUserStore, CreateUserState } from './create-user.store';

@Injectable({ providedIn: 'root' })
export class CreateUserQuery extends Query<CreateUserState> {
  userData$ = this.select('user');

  constructor(protected store: CreateUserStore) {
    super(store);
  }
}
