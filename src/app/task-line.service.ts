import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class TaskLineService {

otherTheme: boolean = false;
  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }
  constructor() { }
}
