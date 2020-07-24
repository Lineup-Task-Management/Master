import { Component, OnInit, Inject } from '@angular/core';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { SubmitNotifService} from 'src/app/service/submit-notif.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from 'src/app/interfaces/task';
import { FirebaseService } from 'src/app/service/firebase.service';



@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  form: FormGroup;
  firebaseService: any;
  tasks: Task[];
  title: string;
  description: string;
  priority: number;
  countdownTimerHours:number;
  countdownTimerMinutes:number;

  countdownTimerSeconds:number;

  countdownTimer: number;


  constructor(
    public submitService: SubmitNotifService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data) {

      this.title = data.title;
      this.description = data.description;
      this.priority = data.priority;

      this.countdownTimer = data.countdownTimer;

  }











  ngOnInit() {


     this.form = this.fb.group({
      title: [this.title, []],
      description: [this.description, []],
      priority: [this.priority, []],
       countdownTimerHours:[this.countdownTimerHours,[]],
       countdownTimerMinutes:[this.countdownTimerMinutes,[]],
       countdownTimerSeconds:[this.countdownTimerSeconds,[]],




     });
     
    
  }
  open: any;
  /*priorities = [ 
    {id:1, value: '1'},
    {id:2, value: '2'},
    {id:3, value: '3'},
    {id:4, value: '4'},
    {id:5, value: '5'},
    {id:6, value: '6'},
    {id:7, value: '7'},
    {id:8, value: '8'},
    {id:9, value: '9'},
    {id:10, value: '10'}
   


  }*/



  onClear(){

    /*if (form!= null)
      form.resetForm();
      this.service.formData = {

        title: '',
        description:' ',
        location: '',
        level: 0,
        type: '',
        duedate: 0
      } */


    this.form.reset();
    // this.service.initializeFormGroup();

  }

  onSubmit() {
    /*let data = Object.assign({}, this.service.form.value);
    delete data.id;
    if (this.service.form.value.id == null)
      this.firestore.collection('').add(data);*/



    /*if (this.service.form.valid){
     this.service.insertTask(this.service.form.value);
      this.submitService.success('Submitted Successfully');
      this.onClose();
     // this.firebaseService.addTask(this.project[this.indexForProj].tasks,this.project[this.indexForProj].id);*/
     // console.log(this.service.form);
    // this.service.addTask(this.task)



     this.dialogRef.close(this.form.value);

    }


  onClose(){
    this.form.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
