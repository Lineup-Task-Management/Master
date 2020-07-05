import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {

  constructor(private firebase: AngularFireDatabase) { }

  taskList: AngularFireList<any>;

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
    this.taskList = this.firebase.list('tasklist')
    return this.taskList.snapshotChanges();

  }

  insertTask(task){
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
   }

} 
