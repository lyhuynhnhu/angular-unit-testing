// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';
// import { By } from '@angular/platform-browser';
// import { SignInComponent } from './sign-in.component';

// describe('SignIn Component', () => {
//   let component: SignInComponent;
//   let fixture: ComponentFixture<SignInComponent>;

//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       declarations: [SignInComponent],
//       imports: [FormsModule, MatDialogModule],
//       schemas: [NO_ERRORS_SCHEMA],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SignInComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should render component correctly', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should validation correctly', async () => {
//     const usernameEle = fixture.debugElement.query(
//       By.css('[data-testid="username"]')
//     );

//     usernameEle.nativeElement.value = 'ang';
//     usernameEle.nativeElement.dispatchEvent(new Event('input'));
//     fixture.detectChanges();

//     const dialog = fixture.debugElement.query(By.css('mat-error'));
//     expect(dialog).toBeTruthy();
//   });

//   it('submits the form successfully', async () => {
//     const usernameEle = fixture.debugElement.query(
//       By.css('[data-testid="username"]')
//     );
//     const pwdEle = fixture.debugElement.query(
//       By.css('[data-testid="password"]')
//     );

//     usernameEle.nativeElement.value = 'angular';
//     usernameEle.nativeElement.dispatchEvent(new Event('input'));

//     pwdEle.nativeElement.value = 'angular@UT';
//     pwdEle.nativeElement.dispatchEvent(new Event('input'));

//     const form = fixture.debugElement.query(By.css('[data-testid="form"]'));
//     form.triggerEventHandler('submit', {});
//     fixture.detectChanges();
//   });
// });

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { render, screen, fireEvent } from '@testing-library/angular';
import { SignInComponent } from './sign-in.component';

describe('SignIn', () => {
  beforeEach(async () => {
    await render(SignInComponent, {
      imports: [MatDialogModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  it('should render elements', async () => {
    expect(screen.getAllByText(/username/i)).toBeTruthy();
    expect(screen.getAllByText(/password/i)).toBeTruthy();
    expect(screen.getAllByText(/Sign in/i)).toBeTruthy();
  });

  it('should validation input', async () => {
    const usernameEle = screen.getByPlaceholderText(/username/i);
    const passwordEle = screen.getByPlaceholderText(/password/i);

    fireEvent.change(usernameEle, { target: { value: 'invalid-input' } });
    fireEvent.focusOut(usernameEle);

    fireEvent.change(passwordEle, { target: { value: 'invalid-pass' } });
    fireEvent.focusOut(passwordEle);

    expect(usernameEle).toHaveClass('ng-invalid');
    expect(passwordEle).toHaveClass('ng-invalid');
  });
});
