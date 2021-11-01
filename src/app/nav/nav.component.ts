import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/state/auth.service';
import { AuthQuery } from '../auth/state/auth.query';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  StatusLoggedIn$: Observable<boolean> = this.authQuery.selectIsLogin$;
  selectIsAdmin$: Observable<boolean> = this.authQuery.selectIsAdmin$;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authQuery: AuthQuery,
    private authService: AuthService
  ) {}

  logout() {
    this.authService.setUser(null);
    localStorage.removeItem('admin');
  }
}
