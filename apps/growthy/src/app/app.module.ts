import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialSharedModule } from './material-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PointsComponent } from './points/points.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthGuard } from './auth.guard';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GrowthySharedUiModule } from '@growthy/growthy/shared-ui';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// 'growthy/growthy/shared-ui';

@NgModule({
  declarations: [
    AppComponent,
    PointsComponent,
    MilestonesComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    LayoutModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    MatTableModule,
    GrowthySharedUiModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthGuard,
    MatSnackBarModule,
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
