import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskLineService} from "../../service/task-line.service";
import {Project} from "../../interfaces/Project";
import {Task} from "../../interfaces/task";
import {FirebaseService} from "../../service/firebase.service";
import {takeWhile} from "rxjs/operators";
import {Observable} from "rxjs";


@Component({
  selector: 'app-task-operations',
  templateUrl: './task-operations.component.html',
  styleUrls: ['./task-operations.component.css']
})
export class TaskOperationsComponent implements OnInit {


  projects: Project[]

  indexForProj:number =0;

  userId: string;
  tempUid: string;
  items: Observable<Project[]>;

  constructor(private tlService: TaskLineService,
              public firebaseService: FirebaseService) { }

  ngOnInit() {

    this.firebaseService.currentUserId.subscribe(userId=> {
      this.userId = userId;

    });
    this.tempUid = this.userId;

this.getProjects();

  }


  getProjects() {
    this.items = this.firebaseService.getProjects();
    this.items
      .pipe(takeWhile(value => this.userId === this.tempUid))
      .subscribe((result => {
        this.projects = result;
        console.log(result);
        console.log(this.projects);

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

  checkUser(){
    console.log("checking user", this.userId,this.tempUid);
    if(this.userId !== this.tempUid){
      this.tempUid = this.userId;
      this.getProjects();
      console.log("checking user", this.userId,this.tempUid);
    }


  }


}
