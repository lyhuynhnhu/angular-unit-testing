import { Component, OnInit } from '@angular/core';
import { UserService } from '../model/user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  welcomeMsg = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.welcomeMsg = this.userService.isLoggedIn
      ? `Welcome, ${this.userService.user.name}`
      : 'Please log in.';
  }
}
