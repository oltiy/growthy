import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User } from 'src/app/users/user.interface';
import { AuthModule } from '../auth.module';
import { AuthService } from '../state/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';

const AUTH: User = {
  userId: Number('userId'),
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  phoneNumber: Number('phoneNumber'),
  admin: !!'boolean',
};

function getButton(fixture: ComponentFixture<LoginComponent>) {
  return fixture.debugElement.query(By.css('button'));
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  function updateForm() {
    component.loginForm.controls['email'].setValue('email');
    component.loginForm.controls['password'].setValue('userPassword');
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [[AuthModule], BrowserAnimationsModule],
        providers: [{ provide: AuthService, useValue: AuthService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  describe('Loading page for login, check  button', () => {
    it('should show "login" button', () => {
      const buttonElement = getButton(fixture);
      expect(buttonElement.nativeElement.textContent).toBe('Login');
    });
    it('download login page ', () => {
      expect(component.loginForm.value).toEqual({
        email: '',
        password: '',
        status: null,
      });
    });
  });
});
// describe('Login to the website', () => {
//   it('test lofgin ', () => {
//     fixture.detectChanges();
//     expect(component.loginForm.value).toEqual({
//       email: '',
//       password: '',
//       status: null,
//     });
//   });
