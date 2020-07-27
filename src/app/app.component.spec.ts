import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MessagingService} from './service/messaging.service';
import { of, Observable } from 'rxjs';

describe('AppComponent', () => {
  let messageStub: any;
  beforeEach(async(() => {

    messageStub = {

    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: MessagingService, useValue: messageStub}
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should have as title 'task-management-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app.title).toEqual('task-management-angular');
  });

  it('Should change theme boolean from false to true',() =>{
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app.theme).toBeFalsy();
    app.onThemeChange(true);
    expect(app.theme).toBeTruthy();

  });
  it('Should change opened boolean from false to true',() =>{
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app.opened).toBeFalsy();
    app.onOpen(true);
    expect(app.opened).toBeTruthy();

  });
  it('Should expect index to start at 0 and change project index from 0 to 3',() =>{
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;

    expect(app.indexForProj).toBe(0);
    app.onIndexChange(3);
    expect(app.indexForProj).toBe(3);

  });
});
