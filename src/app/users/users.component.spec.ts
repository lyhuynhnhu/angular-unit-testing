import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersService } from '../services/users/users.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userServiceSpy: UsersService;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj<UsersService>('UsersService', {
      getAllUsers: of([]),
    });

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [{ provide: UsersService, useValue: userServiceSpy }],
    }).compileComponents();
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
