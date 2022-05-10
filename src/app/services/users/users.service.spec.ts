import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { asyncData, asyncError } from 'src/test/async-observable-helpers';
import { User, UsersService } from './users.service';

const userList: User[] = [
  {
    id: '1',
    name: 'Alice',
    role: 'Designer',
  },
  {
    id: '2',
    name: 'Bob',
    role: 'Developer',
  },
];

describe('UsersService Using Spy', () => {
  let usersService: UsersService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    usersService = new UsersService(httpClientSpy);
  });

  it('should return all users', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncData(userList));

    usersService.getAllUsers().subscribe({
      next: (users) => {
        expect(users).withContext('expected users').toEqual(userList);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: '404 Error',
      status: 404,
      statusText: 'Not Found',
    });
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    usersService.getAllUsers().subscribe({
      next: (users) => done.fail('An error occurred.'),
      error: (error) => {
        expect(error.message).toContain('404 Error');
        done();
      },
    });
  });
});

describe('UserService Using Mock', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(UsersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getAllUsers', () => {
    // let userList: User[];

    beforeEach(() => {
      userService = TestBed.inject(UsersService);
    });

    it('should return all users at once', () => {
      let responseUsers: User[] = [];

      userService.getAllUsers().subscribe({
        next: (users) => {
          responseUsers = users;
        },
        error: (error) => fail(error.message),
      });

      const userRequest = httpTestingController.expectOne(userService.usersUrl);
      expect(userRequest.request.method).toEqual('GET');

      userRequest.flush(userList);
      expect(responseUsers).toEqual(userList);
    });

    it('should return empty when no users are available', () => {
      let responseUsers: User[] = [];
      userService.getAllUsers().subscribe({
        next: (users) => {
          responseUsers = users;
        },
        error: fail,
      });

      const userRequest = httpTestingController.expectOne(userService.usersUrl);
      userRequest.flush([]);
      expect(responseUsers).toEqual([]);
    });

    it('should return correct userList even when being called multiple times', () => {
      let responseUsers: User[] = [];

      userService.getAllUsers().subscribe();
      userService.getAllUsers().subscribe();
      userService.getAllUsers().subscribe({
        next: (users) =>
          expect(users)
            .withContext('should return correct user list')
            .toEqual(userList),
        error: fail,
      });

      const userRequests = httpTestingController.match(userService.usersUrl);
      expect(userRequests.length).withContext('number of calls').toEqual(3);

      userRequests[0].flush([]);
      userRequests[1].flush([
        ...userList,
        {
          id: '3',
          name: 'Cindy',
          role: 'Developer',
        },
      ]);
      userRequests[2].flush(userList);
    });
  });
});
