import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from "./material/material.module";


import {LightDarkComponent} from 'src/app/components/light-dark/light-dark.component';
import {TaskLineService} from "./service/task-line.service";
import {HeaderComponent} from "./components/header/header.component";
import { TaskOperationsComponent } from './components/projects/task-operations.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {DueDateComponent} from "./components/dueDate/dueDate.component";
import { SideNavComponent } from './components/side-nav/side-nav.component';






import { AsyncPipe } from '../../node_modules/@angular/common';
import { MessagingService } from './service/messaging.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,

    LightDarkComponent,

    HeaderComponent,
    TaskOperationsComponent,
    DueDateComponent,
    SideNavComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

    DragDropModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

  ],

  providers: [TaskLineService,MessagingService,AsyncPipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
