import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskLineService} from "../../service/task-line.service";
import {Project} from "../../interfaces/Project";
import {Task} from "../../interfaces/task";

@Component({
  selector: 'app-task-operations',
  templateUrl: './task-operations.component.html',
  styleUrls: ['./task-operations.component.css']
})
export class TaskOperationsComponent implements OnInit {


  projects: Project[];
  idForProj: number =0;
  titleForProj: string = "this is a test";
  indexForProj:number =0;
  tasks: Task[];

  constructor(private tlService: TaskLineService) { }

  ngOnInit() {

this.tlService.currentProjects.subscribe(projects => this.projects = projects);

  }


addProject(){

  let title = ""
  let result = prompt("Project Title", title);

  if(result === null || result === "")
    return;


  this.tasks = [

    {
      'id':0,
      'title':"Make your first task",
      'completed':false,
      'editing':false,
      'description': "Click the add new task button!"
    },

  ];

 this.projects.push(
      {
        'id': ++this.idForProj,
        'title':result,
        'tasks': this.tasks
      } )






    this.tlService.changeProjects(this.projects);
    this.updateIndex(this.idForProj);
}

  @Output() updateProjIndex: EventEmitter<number> = new EventEmitter<number>();

updateIndex(id: number){
    this.indexForProj = this.projects[id].id;
    this.updateProjIndex.emit(this.indexForProj)

}

}
