import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
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
