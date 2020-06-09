import { Component, OnInit } from '@angular/core';
import {TaskLineService} from "../../task-line.service";
import {AppComponent} from 'src/app/app.component'


@Component({
  selector: 'app-light-dark',
  templateUrl: './light-dark.component.html',
  styleUrls: ['./light-dark.component.scss'],
  providers:[TaskLineService]
})
export class LightDarkComponent implements OnInit {




  constructor(public comp: AppComponent) { }

  ngOnInit(): void {
  }

}
