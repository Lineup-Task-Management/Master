import { Component } from '@angular/core';
import {TaskLineService} from "./task-line.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-management-angular';



  constructor() {

  }

  otherTheme: boolean = false;

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }


}
