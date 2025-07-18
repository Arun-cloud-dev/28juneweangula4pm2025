import { Component } from '@angular/core';


import { header } from "./header/header";
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  users = DUMMY_USERS;
}
