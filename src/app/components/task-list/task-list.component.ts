import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



import { Project} from "../../interfaces/Project";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

import { FirebaseService } from '../../service/firebase.service';





import {map, takeWhile} from "rxjs/operators";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Observable} from "rxjs";
import {MatDialog, MatDialogConfig, MAT_DIALOG_SCROLL_STRATEGY_FACTORY} from "@angular/material/dialog"
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';








import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";
import {Task} from "../../interfaces/task";
import {async} from "@angular/core/testing";
import { TaskLineService } from 'src/app/service/task-line.service';
import { title } from 'process';
import { format } from 'path';

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

  tempUid: string;
  connect:boolean=true;
  tempProject: Project[];

  task:any;
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
    let priority=''
    let result = prompt("Task Title", title);
    if (result === null || result === "")
      return;
    let result1 = prompt("Task Description", description);
    let result2 = prompt("Task Priority", priority);


    if (result !== null && result !== "") {
    let date: Date = new Date();

    this.project[this.indexForProj].tasks.push({
      id: ""+ date.getTime(),
      title: result,
      description: result1,
      completed:false,
      editing:false,
      /*location: '',
      level: 0,
      type: '',*/
      duedate: 0 ,


      priority:Number(result2),
    })

    this.firebaseService.addTask(this.project[this.indexForProj].tasks,this.project[this.indexForProj].id);



      }

  }


  edit(id:string, title:string, description: string, priority:string) {
    let result = title;
    if (result === null || result === "")
      return;
    let result1 = description;
    let result2 = priority;

    if (result1 !== null  || result1 !== "") {

      let  tempTask: Task = {
        completed:  false,

        editing: false,

        description : result1,

        title : result,
        id:id,
        priority: Number(priority),
      };



     // this.firebaseService.updateTasks(this.project[this.indexForProj].id,task,tempTask);

    }
  }


deleteTask(task){
  this.firebaseService.deleteTask(this.project[this.indexForProj].id,task)
}

completeTask(task){
  this.firebaseService.completeTask(this.project[this.indexForProj].id,task);
}



drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.project[this.indexForProj].tasks, event.previousIndex, event.currentIndex);
  }

  droptask(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  onEdit(task){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    dialogConfig.data= {
      title: task.title ,
      description: task.description ,
      priority: task.priority,
      duedate: task.duedate
    };
    //dialogConfig.data = task;

 
   //this.getData();
    
    this.dialog.open(DialogBoxComponent, dialogConfig);



    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
    let tempTask: Task;
   dialogRef.afterClosed().subscribe(
    (data) => {              
      tempTask = {
      id: task.id,
      title: data.title,
      description: data.description,
      completed:false,
      editing:false,
      priority:Number(data.priority),
      duedate: data.duedate
      }
      /*location: '',
      level: 0,
      type: '',*/
      
     
     
    })
    this.firebaseService.updateTask(this.project[this.indexForProj].id,tempTask);
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    dialogConfig.data= {
      title: '',
      description: '',
      priority: '',
      duedate: ''
    };

    this.getData();
    this.dialog.open(DialogBoxComponent, dialogConfig);

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
    let date: Date = new Date();
    dialogRef.afterClosed().subscribe(
      (data)=> {
      this.project[this.indexForProj].tasks.push({
      id: ""+ date.getTime(),
      title: data.title,
      description: data.description,
      completed:false,
      editing:false,
      priority:Number(data.priority),
      duedate: data.duedate
      
      
      });
      /*location: '',
      level: 0,
      type: '',
      duedate: 0 */
      this.firebaseService.addTask(this.project[this.indexForProj].tasks,this.project[this.indexForProj].id);

      
    })
      
      
    
  }


  checkUser(){

    console.log("checking user", this.userId,this.tempUid);
    if(this.userId !== this.tempUid){
      this.tempUid = this.userId;
      this.connect = true;
      this.getData();
      console.log("checking user", this.userId,this.tempUid);
    }
  }



  queueByPriority(){



    this.project[this.indexForProj].tasks.sort((n1,n2) => {
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
    console.log(this.tempProject,this.project);
  }
  queueByNew(){
    this.project[this.indexForProj].tasks.sort((n1,n2) => {
      if (n1.id > n2.id) {
        return 1;
      }

      if (n1.id < n2.id) {
        return -1;
      }

      return 0;
    });
  }
  queueByAll(){
    this.getData();
  }

  queueByOld(){
    this.project[this.indexForProj].tasks.sort((n1,n2) => {
      if (n1.id < n2.id) {
        return 1;
      }

      if (n1.id > n2.id) {
        return -1;
      }

      return 0;
    });
  }



}
