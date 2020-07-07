import { Component } from '@angular/core';
import {TaskLineService} from "./service/task-line.service";


import {Observable} from "rxjs";


import { MessagingService } from './service/messaging.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-management-angular';
  isLoggedIn: boolean = false;
  theme: boolean = false;
  indexForProj: number =0;
  opened = false;



  message;
  constructor(
    private messagingService: MessagingService,

    ) {


     }
  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage;

  }

  onThemeChange(value :boolean) {
    this.theme = value;



  }

  onOpen(value: boolean){
    this.opened = value;


  }
  onIndexChange(value :number) {
    this.indexForProj = value;
  }





}
