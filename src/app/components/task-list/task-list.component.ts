import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';




@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  taskTitle:string;
  idForTask: number;
  panelOpenState: boolean;


  constructor(){

  }


  ngOnInit(): void {

    this.idForTask = 3;
    this.taskTitle ='';
    this.tasks = [
      {
        'id':1,
        'title':"This is Task #1",
        'completed':false,
        'editing':false,
        'description': "Description for Task #1"
      },
      {
        'id':2,
        'title':"This is Task #2",
        'completed':false,
        'editing':false,
        'description': "Description for Task #2"
      },
    ];
  }

  deleteTask(id: number){
    this.tasks = this.tasks.filter(tasks => tasks.id != id);
  }

  addTaskItem(): void  {
    let id = this.idForTask
    let title = ""
    let description = ''
    let result = prompt("Task Title", title);
    let result1 = prompt("Task Description", description);



    if (result !== null && result !== "") {

        this.tasks.push({
          id: id,
          title: result,
          completed: false,
          editing: false,
          description: result1,
        })
        this.idForTask++;
      }

    }


  edit(id:number) {

    let title =this.tasks[id-1].title;
    let result = prompt("Edit Task Title", title);
    let result1 = prompt("Edit Task Description", this.tasks[id-1].description);
    if (result1 !== null && result1 !== "") {
      this.tasks[id - 1].description = result1;
    }
    if (result !== null && result !== "") {
      this.tasks[id-1].title = result;
    }

  }

  complete(id: number,completed:boolean){
    let taskCompletion = this.tasks[id-1].completed;
    let promptComplete = confirm("Are you sure you wish to complete?");
    if (promptComplete !=null){
      this.tasks[id-1].completed = true;
    }


  }





}
