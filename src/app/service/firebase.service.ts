import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {BehaviorSubject, Observable} from "rxjs";
import {Project} from "../interfaces/Project";
import { map } from 'rxjs/operators';
import {Task} from "../interfaces/task";


@Injectable({
    providedIn: 'root'
  })
  export class FirebaseService {


  userId:string= "";
  private userIdSource = new BehaviorSubject<string>(this.userId);
  currentUserId = this.userIdSource.asObservable();
  projectCollection: AngularFirestoreCollection<Project>;
  items: Observable<Project[]>;


  constructor(public db: AngularFirestore) {

    console.log(this.userId);
    this.anonymousId();

    this.currentUserId.subscribe(userId=> this.userId = userId);




    }



  getProjects() {
  //   return this.db.collection('Users', ref=> ref.where('uid','==',this.userId))
  //     .snapshotChanges();
    this.projectCollection = this.db.collection('Users/'+this.userId+'/projects');

    this.items = this.projectCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data()as Project;

        data.id = a.payload.doc.id;
        console.log(data);
        return data;
      })
    }));
    return this.items;
  }

  deleteTask(data) {
    return this.db.collection('Users/'+this.userId+'/projects').doc(data).delete();


  }

  completeTask(data) {
    return this.db.collection('Projects/Tasks/Tasks').doc(data.payload.doc.id).set({completed: true}, {merge: true});


  }

  updateTasks() {

  }


  addTask(task: Task[], id: string) {

    this.db.collection('Users/'+this.userId+'/projects').doc(id).set({
      tasks: task,
    },{merge:true});




    // return this.db.collection('Users/'+this.userId+'/projects').doc(id).({
    //
    //  title: title,
    //   description: description,
    //    completed: completed
    //  });
  }


  addProject(title) {

    let date: Date = new Date();
    var ranNum = Math.floor(Math.random() * 1000000).toString();
    this.db.doc('Users/' + this.userId + '/projects/' + ranNum).set({
      id: ranNum,
      title: title,
      tasks: Array<Task>({
        id: ""+date.getTime(),
        title: "Whats your first task?",
        description: "click the add the new task button",
        completed: false,
        editing: false,
       location: '',
        level: 0,
        type: 0,
        duedate: 0
      })
    }, {merge: true});

    console.log(this.db.doc('Users/' + this.userId + '/Projects/' + ranNum).get());



  }




  changeUserId(userId: string){

    this.userIdSource.next(userId);

  }

  anonymousId(){
    if (this.userId === ""){
      this.changeUserId("2CThQyuj97facovRlrzWh2J8gMn1");


      console.log(this.userId);

    }
  }

}













// this.items = this.projectCollection.snapshotChanges().pipe(map(changes => {
//   return changes.map(a => {
//     const data = a.payload.doc.data()as Holder;
//     data.projects = a.payload.doc.data().projects;
//     data.id = a.payload.doc.id;
//     console.log(data);
//     return data;
//   })
// }));

