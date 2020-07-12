import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../interfaces/task';

import {TaskLineService} from "../../service/task-line.service";
import { Project} from "../../interfaces/Project";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

import { FirebaseService } from '../../service/firebase.service';
import { getLocaleDateFormat } from '@angular/common';


import {functions} from "firebase";

import {map, takeWhile} from "rxjs/operators";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Observable} from "rxjs";
import {MatDialog, MatDialogConfig, MAT_DIALOG_SCROLL_STRATEGY_FACTORY} from "@angular/material/dialog"
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';








import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  project: Project[];

  panelOpenState: boolean;
  userId:string;

  items: Observable<Project[]>

  theme: boolean = false;
  // Project[];
  @Input() indexForProj: number;
  @Input() userChange: boolean;
  tempUid: string;


  task: any;
  tasks: any[];
  
  


  constructor(private tlService: TaskLineService,
    public firebaseService: FirebaseService,
  private db: AngularFirestore,
  private dialog: MatDialog,
  private afAuth: AngularFireAuth
 
  ){


  }

  



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


  //this.tasks = this.tasks.filter(tasks => tasks.id != id);

  ngOnInit(): void {


    this.firebaseService.currentUserId.subscribe(userId=> {
      this.userId = userId;

    });
    this.tempUid = this.userId;
    this.getData();

    this.afAuth.authState.subscribe(user =>{

      if(user){
        this.firebaseService.changeUserId(user.uid)
        console.log(this.firebaseService.userId);
        this.checkUser()
      }
      else{
        this.firebaseService.changeUserId("2CThQyuj97facovRlrzWh2J8gMn1");
        this.checkUser();
      }
  })

}











ngOnChanges(): void{
this.getData();

}

  addTaskItem(): void  {

    let title = ""
    let description = ''
    let result = prompt("Task Title", title);
    if (result === null || result === "")
      return;
    let result1 = prompt("Task Description", description);



    if (result !== null && result !== "") {
    let date: Date = new Date();

    this.project[this.indexForProj].tasks.push({
      id: ""+ date.getTime(),
      title: result,
      description: result1,
      completed:false,
      editing:false,
      location: '',
      level: 0,
      type: '',
      duedate: 0


    })

    this.firebaseService.addTask(this.project[this.indexForProj].tasks,this.project[this.indexForProj].id);



        //this.idForTask++;

      }

  //  this.tlService.changeProjects(this.projects);


  }


  edit(id:number) {


    // let title =this.tasks[id-1].title;
    // let result = prompt("Edit Task Title", title);
    // let result1 = prompt("Edit Task Description", this.tasks[id-1].description);
    // if (result1 !== null && result1 !== "") {
    //   this.tasks[id-1].description = result1;
    // }
    // if (result !== null && result !== "") {
    //   this.tasks[id-1].title = result;
    //}

  }
/*
  complete(id: number,completed:boolean){
    let taskCompletion = this.projects[this.indexForProj].tasks[id-1].completed;
    let promptComplete = confirm("Are you sure you wish to complete?");
    if (promptComplete !=null){
      this.projects[this.indexForProj].tasks[id-1].completed = true;
    }
*/

complete = task => this.firebaseService.completeTask(task);

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.project[this.indexForProj].tasks, event.previousIndex, event.currentIndex);
  }

  droptask(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  onEdit(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%"
    this.dialog.open(DialogBoxComponent, dialogConfig);

    
  
    

  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(DialogBoxComponent, dialogConfig);
  }


  checkUser(){
    if (this.tempUid !== this.userId)
    console.log("checking user", this.userId,this.tempUid);
    if(this.userId !== this.tempUid){
      this.tempUid = this.userId;
      this.getData();
      console.log("checking user", this.userId,this.tempUid);
    }


  }


}
