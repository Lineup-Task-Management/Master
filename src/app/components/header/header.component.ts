import { Component, OnInit } from '@angular/core';
import {TaskLineService} from "../../task-line.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tlService: TaskLineService) { }

  ngOnInit(): void {
  }

}
