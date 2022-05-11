import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { render, screen, fireEvent } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { DialogComponent } from '../dialog/dialog.component';
import { SignInComponent } from './sign-in.component';

describe('SignIn Component With Testing Library', () => {
  beforeEach(async () => {
    await render(SignInComponent, {
      imports: [MatDialogModule, FormsModule],
      declarations: [DialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  it('should render', async () => {
    expect(screen.getAllByText(/username/i)).toBeTruthy();
    expect(screen.getAllByText(/password/i)).toBeTruthy();
    expect(screen.getAllByText(/Sign in/i)).toBeTruthy();
  });

  it('should validation inputs', async () => {
    const usernameEle = screen.getByPlaceholderText(/username/i);
    const passwordEle = screen.getByPlaceholderText(/password/i);

    fireEvent.change(usernameEle, { target: { value: 'invalid-input' } });
    fireEvent.focusOut(usernameEle);

    fireEvent.change(passwordEle, { target: { value: 'invalid-pass' } });
    fireEvent.focusOut(passwordEle);

    expect(usernameEle).toHaveClass('ng-invalid');
    expect(passwordEle).toHaveClass('ng-invalid');
    expect(screen.getByTestId('submit-button').hasAttribute('disabled')).toBe(
      true
    );
  });

  it('should submit success', async () => {
    const usernameEle = screen.getByPlaceholderText(/username/i);
    const passwordEle = screen.getByPlaceholderText(/password/i);

    fireEvent.change(usernameEle, { target: { value: 'angular' } });
    fireEvent.focusOut(usernameEle);

    fireEvent.change(passwordEle, { target: { value: 'angular@pass' } });
    fireEvent.focusOut(passwordEle);

    await fireEvent.click(screen.getByTestId('submit-button'));
    expect(usernameEle.hasAttribute('aria-invalid')).toBeFalse();
    expect(passwordEle.hasAttribute('aria-invalid')).toBeFalse();
  });
});
