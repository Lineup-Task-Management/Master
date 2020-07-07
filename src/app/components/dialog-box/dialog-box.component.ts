import { Component, OnInit } from '@angular/core';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { SubmitNotifService} from 'src/app/service/submit-notif.service'
import {MatDialogRef} from '@angular/material/dialog';
import { IEdit } from '../IEdit';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements IEdit {

  constructor(private service: DialogBoxService,
    public submitService: SubmitNotifService,
    public dialogRef: MatDialogRef<DialogBoxComponent>) { }
  open: any;
  types = [ 
    {id:1 , value: 'Task'},
    {id:2 , value: 'Event'}
   

  ];

  title: string;
  description: string;
  location: string;
  level: number;
  type: string;
  
  

showAttribute(title: string, description: string, 
 ) {
this.title = title;
this.description = description;



}





  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSumbit() {
    if (this.service.form.valid){
      this.service.insertTask(this.service.form.value);
      this.submitService.success('Submitted Successfully');
      this.onClose();
    }
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
