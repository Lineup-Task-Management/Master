import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-light-dark',
  templateUrl: './light-dark.component.html',
  styleUrls: ['./light-dark.component.scss']
})
export class LightDarkComponent implements OnInit {
  otherTheme: boolean = false;

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
