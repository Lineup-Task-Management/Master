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

import {Observable} from "rxjs";







@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  project: Project[];

  panelOpenState: boolean;
  userId:string;



  theme: boolean = false;
        // Project[];
  @Input() indexForProj: number;
  @Input() userChange: boolean;


  task: any;


  constructor(private tlService: TaskLineService,
    public firebaseService: FirebaseService,
  private db: AngularFirestore){


  }
  getData(){

    this.firebaseService.getProjects()
      .subscribe((result => {
        this.project = result;
        console.log(result);
        console.log(this.project);
      }));







  }


  //this.tasks = this.tasks.filter(tasks => tasks.id != id);

  ngOnInit(): void {
    this.getData();

    this.firebaseService.currentUserId.subscribe(userId=> {
      this.userId = userId;


    });




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
    let completed = false;


    if (result !== null && result !== "") {




        this.firebaseService.addTask(result,result1, completed,this.indexForProj)
        //this.idForTask++;
        this.getData();
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
    moveItemInArray(this.project, event.previousIndex, event.currentIndex);
  }



  }
