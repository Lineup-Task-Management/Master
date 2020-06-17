import { Component } from '@angular/core';
import {TaskLineService} from "./task-line.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-management-angular';
  theme: boolean = false;
  changeTheme1: { emit: (arg0: boolean) => void; }


  constructor() {

    }


  onThemeChange(value :boolean) {
    this.theme = value;
    this.changeTheme1.emit(this.theme);

  }


  ngOnInit(): void {


  }



}
