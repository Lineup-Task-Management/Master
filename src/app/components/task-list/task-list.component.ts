import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { FirebaseService } from '../../service/firebase.service';
import { getLocaleDateFormat } from '@angular/common';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Array<any>;
  taskTitle:string;
  idForTask: number;
  panelOpenState: boolean;
  task: any;

  constructor(
    public firebaseService: FirebaseService
  ){

  }


  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.firebaseService.getTasks()
    .subscribe(result => (this.tasks = result));
  }
    
  deleteTask = task => this.firebaseService.deleteTask(task);
    //this.tasks = this.tasks.filter(tasks => tasks.id != id);
  

  addTaskItem(): void  {
    //let id = this.idForTask
    let title = ""
    let description = ''
    let result = prompt("Task Title", title);
    let result1 = prompt("Task Description", description);
    let completed = false;


    if (result !== null && result !== "") {
      /*
        this.tasks.push({
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
    let taskCompletion = this.tasks[id-1].completed;
    let promptComplete = confirm("Are you sure you wish to complete?");
    if (promptComplete !=null){
      this.tasks[id-1].completed = true;
    }
*/

complete = task => this.firebaseService.completeTask(task);



  }