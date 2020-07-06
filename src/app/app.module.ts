import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {LightDarkComponent} from 'src/app/components/light-dark/light-dark.component';
import { TaskOperationsComponent } from './components/projects/task-operations.component';

import {MaterialModule} from "./material/material.module";



import {TaskLineService} from "./service/task-line.service";
import {HeaderComponent} from "./components/header/header.component";

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
//import {AngularFireAuth} from '@angular/fire/auth';




@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,

    LightDarkComponent,

    HeaderComponent,
    TaskOperationsComponent,
    DueDateComponent,
    SideNavComponent,
    LoginComponent

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

    //AngularFireAuth,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],

  providers: [TaskLineService,MessagingService,AsyncPipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
