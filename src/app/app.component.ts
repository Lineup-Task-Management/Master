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
  indexForProj: number =0;

  constructor() {

    }


  onThemeChange(value :boolean) {
    this.theme = value;
//    this.changeTheme1.emit(this.theme);

  }
  onIndexChange(value :number) {
    this.indexForProj = value;
  }

  ngOnInit(): void {


  }



}
