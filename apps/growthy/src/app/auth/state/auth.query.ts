import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  selectId$ = this.select('user');

  selectIsLogin$ = this.select((state) => {
    if (!!state.user?.email && !!state.user?.password) {
      return true;
    } else return false;
  });
  selectIsAdmin$ = this.select((state) => {
    if (state.user?.admin) {
      return true;
    } else return false;
  });
  constructor(protected store: AuthStore) {
    super(store);
  }
}
