import { async,TestBed, ComponentFixture } from '@angular/core/testing';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MessagingService } from './messaging.service';
import { FirebaseService } from './firebase.service';

xdescribe('MessagingService', () => {
  let service: MessagingService;
  let aFM: AngularFireMessaging;
  let afmMock: any;
 // let fixture: FirebaseService<MessagingService>

  beforeEach(() => {
    let service;

    TestBed.configureTestingModule({

    })
    service = TestBed.get(MessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
