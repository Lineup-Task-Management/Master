import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task'





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
        'title':"This is task number 1",
        'completed':false,
        'editing':false,
        'description': "description for task 1"
      },
      {
        'id':2,
        'title':"This is task number 2",
        'completed':false,
        'editing':false,
        'description': "description for task 2"
      },
    ];
  }

  deleteTask(id: number):void {
    this.tasks = this.tasks.filter(tasks => tasks.id != id);
  }

  addTaskItem(): void  {
    if (this.taskTitle.trim().length === 0){
      return;
    }
    this.tasks.push({
      id: this.idForTask,
      title: this.taskTitle,
      completed: false,
      editing: false,
      description: ""
    })

    this.taskTitle = '';
    this.idForTask++;
  }


}
