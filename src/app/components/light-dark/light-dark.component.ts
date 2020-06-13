import { Component, OnInit } from '@angular/core';
import {TaskLineService} from "../../task-line.service";
import {Observable} from "rxjs";
import { Output, EventEmitter} from "@angular/core";


@Component({
  selector: 'app-light-dark',
  templateUrl: './light-dark.component.html',
  styleUrls: ['./light-dark.component.scss'],
  providers:[TaskLineService]
})
export class LightDarkComponent implements OnInit {
  theme: boolean = false;
  @Output() changeTheme: EventEmitter<boolean> = new EventEmitter<boolean>();

  themeChange(){
    this.theme = !this.theme;
    this.changeTheme.emit(this.theme);
  }

  constructor() { }


  ngOnInit() {
  }
}
