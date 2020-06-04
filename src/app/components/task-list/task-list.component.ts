import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task'





@Component({
  selector: 'app-todo-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  taskTitle:string;
  idForTask: number;


  constructor(){

  }


  ngOnInit(): void {

    this.idForTask = 3;
    this.taskTitle ='';
    this.tasks = [
      {
        'id':1,
        'title':"This is task number 1",
        'completed':false,
        'editing':false,
      },
      {
        'id':2,
        'title':"This is task number 2",
        'completed':false,
        'editing':false,
      },
    ];
  }


}
