import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import {Project} from "../../interfaces/Project";
import {MatDialog} from '@angular/material/dialog'
import {FirebaseService} from "../../service/firebase.service";
import {AngularFireAuth} from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {of} from 'rxjs';
import {SendMessage} from '../../service/send-message.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {MessagingService} from '../../service/messaging.service';
import { AngularFireMessaging } from '@angular/fire/messaging';



export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({ name: 'some object' })
    };
  }
}

xdescribe('TodoListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let afMock: any;
  let fbMock: any;
  let fsMock: any;
  let fireMessagingMock: any;
  let messageMock: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     // fbServiceMock = jasmine.createSpyObj('FirebaseService',['addTask','getProjects']);

      declarations: [ TaskListComponent ],
      imports: [


      ],
      providers: [
        { provide: FirebaseService, useValue: fbMock },
        { provide: AngularFireAuth, useValue: afMock },
        { provide: AngularFirestore, useValue: fsMock },
        {provide: MatDialog, useClass: MatDialogMock},
        // {provide: SendMessage, useClass: messageMock},
        SendMessage,
        HttpClient,
        HttpHandler,
        MessagingService,
        {provide: AngularFireMessaging, useClass: fireMessagingMock},
        AngularFirestoreModule


      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    afMock = TestBed.get(AngularFireAuth);
    fbMock = TestBed.get(FirebaseService);
    component = fixture.componentInstance;
    afMock = {

    };
    fbMock = {
      getProjects: () => of(Project[2]),

      changeUserId: () => {},

    };
    fsMock = {

    };
    messageMock = {};
    fireMessagingMock = {};


    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a observable', () => {


    fixture.detectChanges();

    expect(component.project).toBeInstanceOf(Project);
    });



});
