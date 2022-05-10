import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  userInfo = {
    userName: '',
    password: '',
    remember: true,
  };

  @Output() changeTitleEvent: EventEmitter<string> = new EventEmitter();

  usernamePattern = /^[a-z]{6,32}$/i;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

  constructor(public dialog: MatDialog) {}
  ngOnInit() {}
  onSubmit(signInForm: NgForm): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: signInForm.value,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
