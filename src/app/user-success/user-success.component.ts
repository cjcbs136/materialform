import {Component} from '@angular/core';
import {UserService} from '../_helpers';
import {User} from '../_models';


@Component({
  selector: 'app-root',
  templateUrl: './user-success.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})


export class UserSuccessComponent {
  currentUser:  User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}

