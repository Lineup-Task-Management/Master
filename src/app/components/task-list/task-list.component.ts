import {ViewChild, Component, EventEmitter, Input, OnInit, Output, Inject, LOCALE_ID} from '@angular/core';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';


import { Project} from '../../interfaces/Project';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { FirebaseService } from '../../service/firebase.service';


import { HttpClient } from '@angular/common/http';


import {map, takeWhile} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {MatDialog, MatDialogConfig, MAT_DIALOG_SCROLL_STRATEGY_FACTORY} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


import {SendMessage} from '../../service/send-message.service';





import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Task} from '../../interfaces/task';
import {async} from '@angular/core/testing';
import { TaskLineService } from 'src/app/service/task-line.service';
import { title } from 'process';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @ViewChild('countdown', { static: false }) private counter: CountdownComponent;
  project: Project[];

  panelOpenState: boolean;
  userId: string;
  started: false;

  items: Observable<Project[]>;

  theme = false;
  // Project[];
  @Input() indexForProj: number;

  tempUid: string;
  connect = true;
  tempProject: Project[];

  task: any;
  tasks: any[];





  constructor(private tlService: TaskLineService,

              public firebaseService: FirebaseService,
              private db: AngularFirestore,
              private dialog: MatDialog,
              private afAuth: AngularFireAuth,
              @Inject(LOCALE_ID) private locale: string,
              private msg: SendMessage,




  ){  }








  getData(){

    this.items = this.firebaseService.getProjects();
    this.items
      .pipe(takeWhile(value => this.userId === this.tempUid))
      .subscribe((result => {
        this.project = result;
        console.log(result);
        console.log(this.project);

      }));

  }


  // this.tasks = this.tasks.filter(tasks => tasks.id != id);

  ngOnInit(): void {


    this.firebaseService.currentUserId.subscribe(userId => {
      this.userId = userId;

    });
    this.tempUid = this.userId;
    this.getData();

    this.afAuth.authState.subscribe(user => {


      if (user){
        this.firebaseService.changeUserId(user.uid);
        console.log(this.firebaseService.userId);
        this.checkUser();
      }
      else{
        this.firebaseService.changeUserId('2CThQyuj97facovRlrzWh2J8gMn1');
        this.checkUser();
      }
  });

}




deleteTask(task){
  this.firebaseService.deleteTask(this.project[this.indexForProj].id, task);
}

completeTask(task){
  this.firebaseService.completeTask(this.project[this.indexForProj].id, task);
}



drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.project[this.indexForProj].tasks, event.previousIndex, event.currentIndex);
  }


  onEdit(task){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';


    dialogConfig.data = {
      title: task.title ,
      description: task.description,
      priority: task.priority,

    };





    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    let tempTask: Task;
    const tempId = task.id;

    dialogRef.afterClosed().subscribe(
      (data) => {

        const hours = Number(data.countdownTimerHours) * 3600;
        const minutes = Number(data.countdownTimerMinutes) * 60;
        const seconds = Number(data.countdownTimerSeconds);
        tempTask = {
          id: tempId,
          title: data.title,
          description: data.description,
          completed: false,
          editing: false,
          priority: Number(data.priority),
          countdownTimer: hours + minutes + seconds,

      };
        console.log(tempTask);

        if (tempTask.title !== '' && tempTask.description !== '' ) {
          if (tempTask.title !== null || tempTask.description!== null || tempTask.priority === 0){
            this.firebaseService.updateTasks(this.project[this.indexForProj].id, task, tempTask);
          }

      }

    });






  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';


    dialogConfig.data = {
      title: '',
      description: '',
      priority: '',

    };



    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
    const date: Date = new Date();
    dialogRef.afterClosed().subscribe(
      (data) => {
              const hours = Number(data.countdownTimerHours) * 3600;
              const minutes = Number(data.countdownTimerMinutes) * 60;
              const seconds = Number(data.countdownTimerSeconds);
        if (data.title !== '' && data.description !== '' ) {
          if (data.title !== null || data.description !== null || data.priority === 0) {
            this.project[this.indexForProj].tasks.push({
              id: '' + date.getTime(),
              title: data.title,
              description: data.description,
              completed: false,
              editing: false,
              priority: Number(data.priority),
              countdownTimer: hours + minutes + seconds,

            });
          }
        }
        if (data.title !== '' && data.description !== '' ) {
          if (data.title !== null || data.description !== null || data.priority === 0) {
            this.firebaseService.addTask(this.project[this.indexForProj].tasks, this.project[this.indexForProj].id);
          }}

    });



  }


  checkUser(){

    console.log('checking user', this.userId, this.tempUid);
    if (this.userId !== this.tempUid){
      this.tempUid = this.userId;
      this.connect = true;
      this.getData();
      console.log('checking user', this.userId, this.tempUid);
    }
  }



  queueByPriority(){



    this.project[this.indexForProj].tasks.sort((n1, n2) => {
      if (n1.priority > n2.priority) {
        return 1;
      }

      if (n1.priority < n2.priority) {
        return -1;
      }

      return 0;
    });

  }

  queueByCompleted(){


    this.tempProject = this.project;
    this.project[this.indexForProj].tasks = this.tempProject[this.indexForProj].tasks.filter(tasks => tasks.completed != true);
    console.log(this.tempProject, this.project);
  }
  queueByNew(){
    this.project[this.indexForProj].tasks.sort((n1, n2) => {
      if (n1.id < n2.id) {
        return 1;
      }

      if (n1.id > n2.id) {
        return -1;
      }

      return 0;
    });
  }
  queueByAll(){
    this.getData();
  }

  queueByOld(){
    this.project[this.indexForProj].tasks.sort((n1, n2) => {
      if (n1.id > n2.id) {
        return 1;
      }

      if (n1.id < n2.id) {
        return -1;
      }

      return 0;
    });
  }


  handleEvent(e: CountdownEvent) {

    if (e.action === 'done'){
      this.msg.sendPostRequest();
    }

    console.log('Actions', e);
  }

  onClick(){


  }

}


