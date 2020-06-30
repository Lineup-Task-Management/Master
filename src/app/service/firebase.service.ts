import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {BehaviorSubject, Observable} from "rxjs";
import {Project} from "../interfaces/Project";

@Injectable({
    providedIn: 'root'
  })
  export class FirebaseService {


  userId:string;
  private userIdSource = new BehaviorSubject<string>(this.userId);
  currentUserId = this.userIdSource.asObservable();

  constructor(public db: AngularFirestore) {
  }

  /* getTasks(){

       return this.db.collection('task').snapshotChanges();
     }
   */
  getTasks() {
    return this.db.collection('Users/'+this.userId).snapshotChanges();
  }
  viewTasks() {
    return this.db.collection('Users/'+this.userId);
  }

<<<<<<< HEAD
getProjects(){
    return this.db.collection('Projects').snapshotChanges();
}
=======
  getProjects() {
    return this.db.collection('Users').doc('9vuFijZpCfeAarBes9eZjd6MggE3')
      .snapshotChanges();
  }

  deleteTask(data) {
    return this.db.collection('Projects/Tasks/Tasks').doc(data.payload.doc.id).delete();


  }

  completeTask(data) {
    return this.db.collection('Projects/Tasks/Tasks').doc(data.payload.doc.id).set({completed: true}, {merge: true});
>>>>>>> Masondev


  }

  addTask(title, description, completed) {
    return this.db.collection('Projects/Tasks/Tasks').add({
      //id : id,
      title: title,
      description: description,
      completed: completed
    });
  }


  addProject(title) {
    return this.db.collection('Projects').doc(title).set({

      title: "First Task",
      description: "Make a new Task",
      completed: false
    });
  }

  changeUserId(userId: string){
    this.userIdSource.next(userId)
  }

}


