import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskLineService} from '../../service/task-line.service';
import {Project} from '../../interfaces/Project';
import {Task} from '../../interfaces/task';
import {FirebaseService} from '../../service/firebase.service';
import {takeWhile} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-task-operations',
  templateUrl: './task-operations.component.html',
  styleUrls: ['./task-operations.component.css']
})
export class TaskOperationsComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
              public firebaseService: FirebaseService) { }


  projects: Project[];

  // tslint:disable-next-line: no-inferrable-types
  indexForProj: number = 0;

  userId: string;
  tempUid: string;
  items: Observable<Project[]>;

  @Output() updateProjIndex: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {

    this.firebaseService.currentUserId.subscribe(userId => {
      this.userId = userId;
    });

    this.tempUid = this.userId;

    this.getProjects();

    this.afAuth.authState.subscribe(user => {

      if (user){
        this.firebaseService.changeUserId(user.uid);
        console.log(this.firebaseService.userId);
        this.checkUser();
      }
      else{
        this.firebaseService.changeUserId('2CThQyuj97facovRlrzWh2J8gMn1');
        this.checkUser();
      }
    });

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

  // tslint:disable-next-line: prefer-const
  let title = '';
  // tslint:disable-next-line: prefer-const
  let result = prompt('Project Title', title);

  if (result === null || result === '') {
    return;
  }
  this.firebaseService.addProject(result);



}

updateIndex(index: number){
    this.indexForProj = index;
    this.updateProjIndex.emit(this.indexForProj);
    console.log(this.indexForProj);

}

  deleteProject = task => this.firebaseService.deleteTask(task);

  checkUser(){
    console.log('checking user', this.userId, this.tempUid);
    if (this.userId !== this.tempUid){
      this.tempUid = this.userId;
      this.getProjects();
      console.log('checking user', this.userId, this.tempUid);
    }


  }


}
