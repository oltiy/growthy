import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from '../material-shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialSharedModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
