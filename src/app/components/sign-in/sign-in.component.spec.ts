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
