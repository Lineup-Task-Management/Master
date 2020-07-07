import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



import { Project} from "../../interfaces/Project";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

import { FirebaseService } from '../../service/firebase.service';





import {map, takeWhile} from "rxjs/operators";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import {Task} from "../../interfaces/task";

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


  constructor(private afAuth: AngularFireAuth,
              public firebaseService: FirebaseService,
              private db: AngularFirestore){


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
    })

    this.firebaseService.addTask(this.project[this.indexForProj].tasks,this.project[this.indexForProj].id);



      }

  }


  edit(id:string, task) {

    let title = ""
    let description = ''
    let result = prompt("Task Title", title);
    if (result === null || result === "")
      return;
    let result1 = prompt("Task Description", description);

    if (result1 !== null  || result1 !== "") {

      let  tempTask: Task = {
        completed:  false,

        editing: false,

        description : result1,

        title : result,
        id:id
      };



      this.firebaseService.updateTasks(this.project[this.indexForProj].id,task,tempTask);

    }
  }


deleteTask(task){
  this.firebaseService.deleteTask(this.project[this.indexForProj].id,task)
}

completeTask(task){
  this.firebaseService.completeTask(this.project[this.indexForProj].id,task);
}

// updateTaskIndex(idx){
//   this.projectID = idx;
//
//   console.log(this.projectID);
// }

drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.project[this.indexForProj].tasks, event.previousIndex, event.currentIndex);
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
