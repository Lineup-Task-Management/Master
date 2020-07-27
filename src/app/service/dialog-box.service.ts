import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable, BehaviorSubject} from 'rxjs';
import {Task} from "../interfaces/task";


import { map, take } from 'rxjs/operators';
import { Project } from '../interfaces/Project';



@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {

  form: FormGroup;
  tasks: Observable<Task[]>;
  taskList: AngularFireList<any>;
  taskCollection: AngularFirestoreCollection<Task>;
  projectCollection: AngularFirestoreCollection<Project>
  userId: string;

  constructor(
              private firestore: AngularFirestore,

              ) { this.projectCollection = this.firestore.collection('items');
                //this.tasks=this.firestore.collection('Users/'+this.userId+'/projects').valueChanges();
               /* this.tasks = this.projectCollection.snapshotChanges().pipe(map(changes => {
                  return changes.map(a => {
                    const data = a.payload.doc.data()as Task;

                    data.id = a.payload.doc.id;
                    console.log(data);
                    return data;
                  });
                })); */
  }



   initializeFormGroup(){
    this.form.setValue({
      $key: null,
      title: '',
      description: '',
      location: '',
      level: '1',
      type: '0',
      duedate: ''

    })

  }

  getTasks(){
    return this.tasks;
    // this.taskList = this.firebase.list('tasklist')
    // return this.taskList.snapshotChanges();

  }

  addTask(task: Task[], id: string) {

    this.firestore.collection('Users/'+this.userId+'/projects').doc(id).set({
      tasks: task,
    },
    {merge: true});

  }


























  /*insertTask(task){
    this.taskList.push({
      title: task.title,
      description: task.description,
      location: task.location,
      level: task.level,
      type: task.type,
      duedate: task.duedate
    })
  }

   updateTask(task){
     this.taskList.update(task.$key,
      {
        title: task.title,
      description: task.description,
      location: task.location,
      level: task.level,
      type: task.type,
      duedate: task.duedate
      });
   }

   delete($key: string){
     this.taskList.remove($key);
   }*/

}
