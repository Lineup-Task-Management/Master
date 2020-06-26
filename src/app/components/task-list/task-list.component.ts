import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../interfaces/task';

import {TaskLineService} from "../../service/task-line.service";
import { Project} from "../../interfaces/Project";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

import { FirebaseService } from '../../service/firebase.service';
import { getLocaleDateFormat } from '@angular/common';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  //tasks: Task[] //Array<any>;
  taskTitle:string;
  idForTask: number;
  panelOpenState: boolean;
  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: any;
  theme: boolean = false;
  projects: Project[];  //Array<any>
  description: string;        
  @Input() indexForProj: number;



 // task: any;


  constructor(private tlService: TaskLineService,
    private afs: AngularFirestore){


  }
  // getData(){
  //   this.firebaseService.getTasks()
  //     .subscribe((result => (this.projects = result));






   // this.firebaseService.getTasks()
    //  .subscribe(result => (this.tasks = result));
  //}

  //deleteTask = task => this.firebaseService.deleteTask(task);
  //this.tasks = this.tasks.filter(tasks => tasks.id != id);

  ngOnInit() {

      this.tasksCollection = this.afs.collection('Projects').doc('Tasks').collection("Tasks");
      this.tasks = this.tasksCollection.snapshotChanges().pipe(map(actions => {

          return actions.map(a=> {
            const data = a.payload.doc.data() as Task;
            const id = a.payload.doc.id;
            return {id, data};
          })



        }))
    //this.getData();

      }

    //   this.tlService.currentProjects.subscribe(projects => this.projects = projects)
    //
    //   this.idForTask = 1;
    //
    //   this.taskTitle ='';
    //
    //
    //   this.tasks = [
    //
    //   {
    //       'id':this.idForTask ++,
    //       'title':"This is Task #1",
    //       'completed':false,
    //       'editing':false,
    //       'description': "Description for Task #1"
    //     },
    //     {
    //       'id':this.idForTask ++,
    //       'title':"This is Task #2",
    //       'completed':false,
    //       'editing':false,
    //       'description': "Description for Task #2"
    //     },
    //   ];
    //
    //   this.projects = [
    //     {
    //       'id' :0,
    //       'title': "this is a test",
    //       'tasks': this.tasks,
    //
    //     }
    //     ];
    //
    // this.tlService.changeProjects(this.projects);
    // }

 // deleteTask(id: number){
   // this.projects[this.indexForProj].tasks = this.projects[this.indexForProj].tasks.filter(tasks => tasks.id != id);
   // this.tlService.changeProjects(this.projects);
 // }




  addTaskItem() {
    //let id = this.idForTask
    /* let title = ""
    let description = ''
    let result = prompt("Task Title", title);
    if (result === null || result === "")
      return;
    let result1 = prompt("Task Description", description);
    let completed = false;


    if (result !== null && result !== "") { */ 


  /*  this.projects[this.indexForProj].tasks.push({



    id: id,
    title: result,
    completed: false,
    editing: false,
    description: result1,

  })
  */

        this.afs.collection('Tasks').add({
          'title': this.taskTitle,
          'description': this.description,
          'completed': false

        })
        //this.idForTask++;
        //this.getData();
      }

  //  this.tlService.changeProjects(this.projects);


  }


/*   edit(id:number) {


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

  complete(id: number,completed:boolean){
    let taskCompletion = this.projects[this.indexForProj].tasks[id-1].completed;
    let promptComplete = confirm("Are you sure you wish to complete?");
    if (promptComplete !=null){
      this.projects[this.indexForProj].tasks[id-1].completed = true;
    }


complete = task => this.firebaseService.completeTask(task);

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
  */


  
