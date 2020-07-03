import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskLineService} from "../../service/task-line.service";
import {Project} from "../../interfaces/Project";
import {Task} from "../../interfaces/task";
import {FirebaseService} from "../../service/firebase.service";


@Component({
  selector: 'app-task-operations',
  templateUrl: './task-operations.component.html',
  styleUrls: ['./task-operations.component.css']
})
export class TaskOperationsComponent implements OnInit {


  projects: Project[]   // Project[];
  idForProj: number =1;
  titleForProj: string = "this is a test";
  indexForProj:number =0;


  constructor(private tlService: TaskLineService,
              public firebaseService: FirebaseService) { }

  ngOnInit() {


this.getProjects();
  }

  getProjects(){
    this.firebaseService.getProjects()
      .subscribe((result => {
        this.projects = result;
        console.log(result);
        console.log(this.indexForProj)
        ;
      }));
    }
addProject(){

  let title = ""
  let result = prompt("Project Title", title);

  if(result === null || result === "")
    return;
  this.firebaseService.addProject(result);



}

  @Output() updateProjIndex: EventEmitter<number> = new EventEmitter<number>();

updateIndex(index: number){
    this.indexForProj = index;
    this.updateProjIndex.emit(this.indexForProj);
    console.log(this.indexForProj);

}

  deleteProject = task => this.firebaseService.deleteTask(task);

}
