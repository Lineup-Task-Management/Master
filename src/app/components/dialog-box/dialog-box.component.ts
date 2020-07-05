import { Component, OnInit } from '@angular/core';
import { DialogBoxService } from 'src/app/service/dialog-box.service';
import { SubmitNotifService} from 'src/app/service/submit-notif.service'
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(private service: DialogBoxService,
    public submitService: SubmitNotifService,
    public dialogRef: MatDialogRef<DialogBoxComponent>) { }
  types = [ 
    {id:1 , value: 'Task'},
    {id:2 , value: 'Event'}
   

  ];

  ngOnInit(): void {
    this.service.getTasks();
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
