import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "./material/material.module";

import {LightDarkComponent} from 'src/app/components/light-dark/light-dark.component';
import {TaskLineService} from "./task-line.service";





@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,

    LightDarkComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,


  ],
  providers: [TaskLineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
