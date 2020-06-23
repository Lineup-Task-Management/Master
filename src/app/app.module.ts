import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "./material/material.module";

import {LightDarkComponent} from 'src/app/components/light-dark/light-dark.component';
import {TaskLineService} from "./task-line.service";
import {HeaderComponent} from "./components/header/header.component";
import { TaskOperationsComponent } from './components/projects/task-operations.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {DueDateComponent} from "./components/dueDate/dueDate.component";





@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,

    LightDarkComponent,
    HeaderComponent,
    TaskOperationsComponent,
    DueDateComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    DragDropModule,


  ],
  providers: [TaskLineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
