import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StopwatchComponent } from './stopwatch.component';
import { of, Observable } from 'rxjs';

describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwatchComponent ]
    })
    .compileComponents();
  }));

  it('should create the stopwatch component', () => {
    let fixture = TestBed.createComponent(StopwatchComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


});

