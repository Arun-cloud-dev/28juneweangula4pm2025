import { Component } from '@angular/core';


import { header } from "./header/header";
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Managementapp';
}
