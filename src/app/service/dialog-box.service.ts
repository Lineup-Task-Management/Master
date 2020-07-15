import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable, BehaviorSubject} from 'rxjs';
import {Task} from "../interfaces/task";


import { map, take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {
 
  form: FormGroup;
  tasks: Observable<Task[]>;
  //taskList: AngularFireList<any>;
  taskCollection: AngularFirestoreCollection<Task>;
 

  constructor(
              private firestore: AngularFirestore,
              
              ) { 
                this.tasks=this.firestore.collection('tasks').valueChanges();
                   
                
  }

 


   /*initializeFormGroup(){
    this.form.setValue({
      $key: null,
      title: '',              // This is not needed, initialized at declaration in dialog-box.component
      description: '',
      location: '',
      level: '1',
      type: '0',
      duedate: ''

    })

  }*/

  getTasks(){
    return this.tasks;
    
    //this.taskList = this.firebase.list('tasklist')
    //return this.taskList.snapshotChanges();

  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //These functions are not needed. They are used for Firebase real-time database
  
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
