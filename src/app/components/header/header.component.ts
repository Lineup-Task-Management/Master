import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskLineService} from "../../task-line.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  theme = false;
  opened = false
  @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>();

  onOpen(){
    this.opened =! this.opened;
    this.open.emit(this.opened);
  }

  onThemeChange(value :boolean) {
    this.theme = value;
    this.changeTheme1.emit(this.theme);

  }
  @Output() changeTheme1: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private tlService: TaskLineService) { }

  ngOnInit(): void {
  }

}
