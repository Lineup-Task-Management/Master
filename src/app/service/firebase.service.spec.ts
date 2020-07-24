import { FirebaseService} from "./firebase.service"
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Task} from '../interfaces/task';

import { Project } from '../interfaces/Project';

import {of, observable, Observable , from} from 'rxjs';
import { async, TestBed } from '@angular/core/testing';
import { TaskOperationsComponent } from '../components/projects/task-operations.component';
import { TaskListComponent } from '../components/task-list/task-list.component';


const input ={
  id: 'Test',
  title: 'Test',
  tasks: {
    id: 'Test',
    title: 'Whats your first task?',
    description: 'click the add the new task button',
    completed: false,
    editing: false,
    priority: 1,
    countdownTimer: 0},

  }

const data = Observable.create(input)

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
}

const angularFiresotreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
}

describe("FirebaseService", () => {

  let service: FirebaseService;
  let aFS: AngularFirestore;

  let serviceStub: any;
  let aFSMock: any;
  let aFCMock: any;
  let fakeDoc: any;
  let task: any;


  beforeEach(async(() => {

    aFSMock = {};

    aFCMock = {};



    serviceStub = {
      getProjects: () => of(Project[2]),
    };

    TestBed.configureTestingModule({

      providers: [ FirebaseService,
                    {provide: AngularFirestore, useValue: aFSMock},
                    {provide: AngularFirestoreCollection, useValue: aFCMock},
                    {provide: AngularFirestoreDocument, useValue: fakeDoc},

      ]

    })
    .compileComponents();
  }));


  beforeEach(() => {
    service = TestBed.get(FirebaseService);
    aFS = TestBed.get(AngularFirestore)
    //fakeDoc= TestBed.inject(AngularFirestoreDocument);

  });

  it ('should create ', () => {
    expect(service).toBeTruthy();


  });

  it ('Firebase Service should be defined ', () => {
    expect(service).toBeDefined();


  });

  it ('database collection is initialized ', () => {
    expect(service.db).toBeDefined();

  });

  it ('database userID created ', () => {
    expect(service.currentUserId).toBeDefined()

  });

  it ('initialize a stub project to use with unit test', () => {
    expect(serviceStub).toBeDefined();

  });

  it ('Angular Firestore Object should be defined ', () => {
    expect(aFS).toBeDefined();

  });
  /*
  it ('deletes an item to Firebase', ()=>{
    spyOn(service.addProject('Test'),).and.callThrough
    service.addProject('Test');
    expect(service.db.doc('').set).toHaveBeenCalled();

  });
*/

});