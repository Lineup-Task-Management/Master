import { Component, OnInit, Inject } from '@angular/core';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { SubmitNotifService} from 'src/app/service/submit-notif.service'
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
 
  firebaseService: any;
  tasks: Task[];
  task: Task = {
    title:'',
    description: ''
  }

  constructor(public service: DialogBoxService,
    public submitService: SubmitNotifService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    public fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) data) {

      this.service.form = this.fb.group({
        $key: [],
        title: [],
        description: [],
        location: [],
        level: [],
        type: [],
        duedate: []
      });
  }



    

  ngOnInit() {
    
     
     
     
     
     this.service.getTasks().subscribe(tasks=> {
        //console.log(tasks);
        this.tasks=tasks;
      })  
    
  }
  open: any;
  types = [ 
    {id:1 , value: 'Task'},
    {id:2 , value: 'Event'}
   

  ];



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


    this.service.form.reset();
    //this.service.initializeFormGroup();
    
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
     console.log(this.service.form);
     
     this.dialogRef.close(this.service.form.value);
    
    }
  

  onClose(){
    this.service.form.reset();
    //this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
