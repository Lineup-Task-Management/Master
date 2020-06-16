import { Component } from '@angular/core';
import {TaskLineService} from "./task-line.service";
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-management-angular';
  message;
  constructor(private messagingService: MessagingService) { }
ngOnInit() {
  this.messagingService.requestPermission()
  this.messagingService.receiveMessage()
  this.message = this.messagingService.currentMessage
 }


  otherTheme: boolean = false;

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }


}
