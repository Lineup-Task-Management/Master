import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import {Task} from "../interfaces/task";


@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {
  formData: Task;
  tasks: Observable<Task[]>;
  taskList: AngularFireList<any>;
  taskCollection: AngularFirestoreCollection<Task>;
 

  constructor(private firebase: AngularFireDatabase,
    private firestore: AngularFirestore,
    ) { 
      
    }
 

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    location: new FormControl(''),
    level: new FormControl(''),
    type: new FormControl(''),
    duedate: new FormControl('')
   
   });

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
    
    //this.taskList = this.firebase.list('tasklist')
    //return this.taskList.snapshotChanges();

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
