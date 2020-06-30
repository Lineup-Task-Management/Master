import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../interfaces/task';

import {TaskLineService} from "../../service/task-line.service";
import { Project} from "../../interfaces/Project";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

import { FirebaseService } from '../../service/firebase.service';
import { getLocaleDateFormat } from '@angular/common';


import {functions} from "firebase";

import {map} from "rxjs/operators";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';







@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: any;
  taskTitle:string;
  idForTask: number;
  panelOpenState: boolean;

  theme: boolean = false;
  projects:   Array<any>        // Project[];
  @Input() indexForProj: number;


  docRef: any
  task: any;


  constructor(private tlService: TaskLineService,
    public firebaseService: FirebaseService,
  private db: AngularFirestore){


  }
  getData(){

    this.firebaseService.getProjects()
      .subscribe((result => {
        this.tasks = result.payload.data();
        console.log(result);
        console.log(this.tasks)

        ;
      }));
    // this.tasks = this.db.collection("Users/"+this.firebaseService.userId)
    //   .snapshotChanges().subscribe(res=>{
    //     this.tasks = res;
    //     console.log(res);
    //     console.log(this.tasks);
    //   })






   // this.firebaseService.getTasks()
    //  .subscribe(result => (this.tasks = result));
  }

  deleteTask = task => this.firebaseService.deleteTask(task);
  //this.tasks = this.tasks.filter(tasks => tasks.id != id);

  ngOnInit(): void {
    this.getData();
    //this.docRef = this.db.collection('Users').doc(this.firebaseService.userId);
    //this.docRef.get().toPromise().then(function(doc){
     //   return doc
   // })


  }





  addTaskItem(): void  {
    //let id = this.idForTask
    let title = ""
    let description = ''
    let result = prompt("Task Title", title);
    if (result === null || result === "")
      return;
    let result1 = prompt("Task Description", description);
    let completed = false;


    if (result !== null && result !== "") {


  /*  this.projects[this.indexForProj].tasks.push({



    id: id,
    title: result,
    completed: false,
    editing: false,
    description: result1,

  })
  */

        this.firebaseService.addTask(result,result1, completed)
        //this.idForTask++;
        this.getData();
      }

  //  this.tlService.changeProjects(this.projects);


  }


  edit(id:number) {


    let title =this.tasks[id-1].title;
    let result = prompt("Edit Task Title", title);
    let result1 = prompt("Edit Task Description", this.tasks[id-1].description);
    if (result1 !== null && result1 !== "") {
      this.tasks[id-1].description = result1;
    }
    if (result !== null && result !== "") {
      this.tasks[id-1].title = result;
    }

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
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }



  }
