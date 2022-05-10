import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { render, screen, fireEvent } from '@testing-library/angular';

import { SignInComponent } from './sign-in.component';

describe('SignIn Component', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [FormsModule, MatDialogModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render component correctly', () => {
    expect(component).toBeTruthy();
  });

  it('submits the form successfully', async () => {
    const usernameEle = fixture.debugElement.query(By.css('[name="username"]'));
    const pwdEle = fixture.debugElement.query(By.css('[name="password"]'));

    usernameEle.nativeElement.value = 'angular';
    usernameEle.nativeElement.dispatchEvent(new Event('input'));

    pwdEle.nativeElement.value = 'angular@UT';
    pwdEle.nativeElement.dispatchEvent(new Event('input'));

    const form = fixture.debugElement.query(By.css('[data-testid="form"]'));
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();

    const dialog = fixture.debugElement.query(By.css('[role="dialog"]'));
    expect(dialog).toBeTruthy();
  });
});

describe('SignIn Component With Testing Library', () => {
  it('should render counter', async () => {
    await render(SignInComponent, {
      imports: [FormsModule, MatDialogModule],
    });

    expect(screen.getByPlaceholderText(/username/i)).toBeDefined();
  });

  it('should validate inputs', async () => {
    await render(SignInComponent, {
      imports: [FormsModule, MatDialogModule],
    });

    const usernameInput = screen.getByPlaceholderText(/username/i);

    fireEvent.change(usernameInput, { target: { value: 'invalid_input' } });
    fireEvent.focusOut(usernameInput);

    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordInput, { target: { value: '`123`' } });
    fireEvent.focusOut(passwordInput);

    expect(usernameInput).toHaveClass('ng-invalid');
    expect(passwordInput).toHaveClass('ng-invalid');
  });
});
