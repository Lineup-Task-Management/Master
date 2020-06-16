import { Component, OnInit } from '@angular/core';
import {TaskLineService} from "../../task-line.service";
import {Project} from "../../interfaces/Project";
import {Task} from "../../interfaces/task";

@Component({
  selector: 'app-task-operations',
  templateUrl: './task-operations.component.html',
  styleUrls: ['./task-operations.component.css']
})
export class TaskOperationsComponent implements OnInit {


  projects: Project[];
  idForProj: number =1;
  titleForProj: string = "this is a test";
  constructor(private tlService: TaskLineService) { }

  ngOnInit() {

this.tlService.currentProjects.subscribe(projects => this.projects = projects);

  }


addProject(){




    this.projects.push(
      {
        'id': this.idForProj,
        'title':"poop",
        'tasks': []
      }
      )
  this.idForProj++;
    this.tlService.changeProjects(this.projects)
}




}
