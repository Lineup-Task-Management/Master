import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



import { Project} from "../../interfaces/Project";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

import { FirebaseService } from '../../service/firebase.service';





import {map, takeWhile} from "rxjs/operators";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import {Task} from "../../interfaces/task";
import {async} from "@angular/core/testing";

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

  task: any;


  constructor(private afAuth: AngularFireAuth,
              public firebaseService: FirebaseService,
              ){


  }
  /**
   * @name getData
   * getData will get the get an Projects[] observable from the firebase service. Which had a database collection
   * mapped to a project data type. it then sets a local projects array equal to the data in the observable
   * from firebase.
   */

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



  /**
   * @name addTaskItem
   * Add task item will take input from the user, make a new task object and push it into the local data
   * after its in the local data we use the firebase service method addTask to add it to the data base.
   *
   */

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
      priority:Number(result2),
    })

    this.firebaseService.addTask(this.project[this.indexForProj].tasks,this.project[this.indexForProj].id);



      }

  }
  /**
   * @name edit
   * Edit task item will take input from the user, make a new task object and push it into the local data
   * after its in the local data we use the firebase service method updateTask to add it to the data base and remove its previous version.
   *
   */

  edit(id:string, task) {

    let title = ""
    let description = ''
    let priority='';
    let result = prompt("Task Title", title);
    if (result === null || result === "")
      return;
    let result1 = prompt("Task Description", description);
    let result2 = prompt("Task Priority", priority);

    if (result1 !== null  || result1 !== "") {

      let  tempTask: Task = {
        completed:  false,

        editing: false,

        description : result1,

        title : result,
        id:id,
        priority: Number(result2),
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



drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.project[this.indexForProj].tasks, event.previousIndex, event.currentIndex);
  }

  /**
   * @name checkUser
   * checkUser will see if the value for userId has changed by comparing it to the local tempUid.
   * if they are not equal then it will update tempuid and get a new observable from the database.
   * This checks if the observable we were working with has closed and will get a new one.
   */
  checkUser(){

    console.log("checking user", this.userId,this.tempUid);
    if(this.userId !== this.tempUid){
      this.tempUid = this.userId;
      this.connect = true;
      this.getData();
      console.log("checking user", this.userId,this.tempUid);
    }
  }

  /**
   * @name queueByPriority
   * queueByPriority will sort the local data by priority
   *
   */

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
  /**
   * @name queueByCompleted
   * queueByCompleted will filter out all completed tasks
   *
   */


  queueByCompleted(){


    this.tempProject = this.project;
    this.project[this.indexForProj].tasks = this.tempProject[this.indexForProj].tasks.filter(tasks => tasks.completed != true);
    console.log(this.tempProject,this.project);
  }

  /**
   * @name queueByNew
   * queueByNew sort the array by the id of the task.
   * the id is equal to the numerical format of the date in miliseconds of when the task was created.
   */
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


  /**
   * @name queueByAll
   * queueByAll will refresh the observable to bring the filtered out completed tasks back into view.
   */
  queueByAll(){
    this.getData();
  }
  /**
   * @name queueByOld
   * queueByOld sorts array by olds tasks first by using id.
   */
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
