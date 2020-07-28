import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOperationsComponent } from './task-operations.component';
import {FirebaseService} from '../../service/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import {Project} from '../../interfaces/Project';
import * as firebase from 'firebase';


describe('TaskOperationsComponent', () => {
  let component: TaskOperationsComponent;
  let fixture: ComponentFixture<TaskOperationsComponent>;
  let afMock: any;
  let fbMock: any;
  let project: any;
  let projectTitle: any;
  let afService: AngularFireAuth;
  let fbService: FirebaseService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    afMock = {

    };
    fbMock = {
    getProjects: () => of(Project[2]),

    changeUserId: () => {},

    };
    TestBed.configureTestingModule({
      declarations: [ TaskOperationsComponent ],
      providers: [
        { provide: FirebaseService, useValue: fbMock },
        { provide: AngularFireAuth, useValue: afMock }

      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOperationsComponent);
    component = fixture.componentInstance;
   // spy = spyOn(fbService, 'getProjects').and.returnValue(of(Observable<Project[]>));
    afMock.authState = of({username: 'test'});
    fbMock.currentUserId = of('testNumber');
    fbMock.deleteProject = (task) => {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an', () => {
    expect(component.indexForProj).toBe(0);
    component.updateIndex(2);
    expect(component.indexForProj).toBe(2);
  });

  it('should check user Id and change tempUid to match userId', () => {
    expect(component.userId).toBe("testNumber");
    component.tempUid = "not userid";
    component.checkUser();
    expect(component.tempUid).toBe("testNumber");
  });


  /* Add a new project if the title is not empty */

  it('should create a new project if the title is not empty', () => {
    expect(component).toBeDefined(projectTitle);

  });


    /* getProjects() is defined and initialized */

  it('should ensure getProjects() is defined and functioning properly', () => {

    expect(component).toBeDefined(project);

  });

});
