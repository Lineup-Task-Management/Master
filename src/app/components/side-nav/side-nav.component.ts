import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  constructor() { }

  opened = false;
  indexForProj = 0;
  @Output() updateProjIndex: EventEmitter<number> = new EventEmitter<number>();

  onIndexChange(value: number) {
    this.indexForProj = value;
  }

  ngOnInit(): void {
  }

}
