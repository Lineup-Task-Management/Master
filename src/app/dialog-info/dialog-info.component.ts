import { Component, OnInit } from '@angular/core';
import {IEdit} from 'src/app/components/IEdit'; 
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { SubmitNotifService} from 'src/app/service/submit-notif.service'
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-factory-method2',
  templateUrl: './factory-method2.component.html',
  styleUrls: ['./factory-method2.component.css']
})
export class DialogInfoComponent implements IEdit {

  constructor(private service: DialogBoxService,
    public submitService: SubmitNotifService,
    public dialogRef: MatDialogRef<DialogInfoComponent>) { }
  showotherAttribute: any;
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
  
  

showotherAttribute(
level: number, type: string ) {
this.level = level;
this.type = type;


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
