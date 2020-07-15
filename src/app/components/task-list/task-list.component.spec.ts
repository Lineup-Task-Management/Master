import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import {Project} from "../../interfaces/Project";
import {Task} from "../../interfaces/task";
import {FirebaseService} from "../../service/firebase.service";
import {AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire";

describe('TodoListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let fbServiceMock: FirebaseService;
  let afAuthMock: AngularFireAuthModule;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
     // fbServiceMock = jasmine.createSpyObj('FirebaseService',['addTask','getProjects']);

      declarations: [ TaskListComponent ],
      imports: [


      ],
      providers: [
        FirebaseService,

        AngularFireAuthModule,

       // {provide: FirebaseService, useValue: fbServiceMock}
        //{provide: AngularFireAuth, useValue: afAuthMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    afAuthMock = TestBed.get(AngularFireAuth);
    fbServiceMock = TestBed.get(FirebaseService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a observable',()=>{

    component.addTaskItem();
    fixture.detectChanges();

    expect(component.project).toBeInstanceOf(Project);
    })



});
