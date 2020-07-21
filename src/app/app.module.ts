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
import {SendMessage} from "./service/send-message.service";


import {TaskLineService} from "./service/task-line.service";
import {HeaderComponent} from "./components/header/header.component";

import {DragDropModule} from "@angular/cdk/drag-drop";
import {DueDateComponent} from "./components/dueDate/dueDate.component";
import { SideNavComponent } from './components/side-nav/side-nav.component';


import { CountdownModule, CountdownConfig } from 'ngx-countdown';

import { HttpClientModule } from '@angular/common/http';

import { AsyncPipe } from '../../node_modules/@angular/common';
import { MessagingService } from './service/messaging.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { DialogBoxService } from './service/dialog-box.service';
import { ReactiveFormsModule} from '@angular/forms';

import {MatChipsModule} from "@angular/material/chips";
import {MatRadioModule} from "@angular/material/radio";
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
    LoginComponent,
    DialogBoxComponent,
   
    

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    DragDropModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    //AngularFireAuth,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatChipsModule,
    MatRadioModule,
    BrowserModule, CountdownModule,

  ],

  providers: [TaskLineService,MessagingService,AsyncPipe, DialogBoxService,  SendMessage],

  bootstrap: [AppComponent],

  entryComponents:[DialogBoxComponent]

})
export class AppModule { }
