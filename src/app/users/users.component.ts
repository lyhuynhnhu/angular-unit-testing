import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users) => (this.userList = users),
      error: (_) => (this.userList = []),
    });
  }
}
