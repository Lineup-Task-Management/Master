import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../../interfaces/task';
import {TaskLineService} from "../../task-line.service";
import { Project} from "../../interfaces/Project";


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
  theme: boolean = false;
  projects:Project[];
  @Input() indexForProj: number;


  constructor(private tlService: TaskLineService){

  }


  ngOnInit(): void {




    this.tlService.currentProjects.subscribe(projects => this.projects = projects)
    this.idForTask = 1;

    this.taskTitle ='';


    this.tasks = [

    {
        'id':this.idForTask ++,
        'title':"This is Task #1",
        'completed':false,
        'editing':false,
        'description': "Description for Task #1"
      },
      {
        'id':this.idForTask ++,
        'title':"This is Task #2",
        'completed':false,
        'editing':false,
        'description': "Description for Task #2"
      },
    ];

    this.projects = [
      {
        'id' :0,
        'title': "this is a test",
        'tasks': this.tasks,

      }
      ];

  this.tlService.changeProjects(this.projects);
  }

  deleteTask(id: number){
    this.projects[this.indexForProj].tasks = this.projects[this.indexForProj].tasks.filter(tasks => tasks.id != id);
    this.tlService.changeProjects(this.projects);
  }

  addTaskItem(): void  {
    let id = this.idForTask
    let title = ""
    let description = ''
    let result = prompt("Task Title", title);
    let result1 = prompt("Task Description", description);



    if (result !== null && result !== "") {

        this.projects[this.indexForProj].tasks.push({
          id: id,
          title: result,
          completed: false,
          editing: false,
          description: result1,
        })
        this.idForTask++;
      }

    this.tlService.changeProjects(this.projects);


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

  complete(id: number,completed:boolean){
    let taskCompletion = this.projects[this.indexForProj].tasks[id-1].completed;
    let promptComplete = confirm("Are you sure you wish to complete?");
    if (promptComplete !=null){
      this.projects[this.indexForProj].tasks[id-1].completed = true;
    }


  }







}
