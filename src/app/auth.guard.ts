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

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  statusLoggedIn$: Observable<boolean> = this.authQuery.selectIsLogin$;

  constructor(private router: Router, private authQuery: AuthQuery) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let a: boolean = false;
    this.statusLoggedIn$.subscribe((data) => {
      if (!data) {
        this.router.navigateByUrl('/login');
        a = false;
      } else {
        a = true;
      }
    });
    return a;
  }
}
