import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SubmitNotifService {

  constructor(public snackbar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'

  }

  success(msg){
    this.config['panelClass']=['notification','success'];
    this.snackbar.open(msg, '');
  }
}
