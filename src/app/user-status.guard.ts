import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthQuery } from './auth/state/auth.query';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserStatusGuard implements CanActivate {
  constructor(private router: Router, private authQuery: AuthQuery) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authQuery.selectIsAdmin$.pipe(
      tap((isAdmin) => {
        if (!isAdmin) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}
