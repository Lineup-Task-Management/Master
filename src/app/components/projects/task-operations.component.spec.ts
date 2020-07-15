import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOperationsComponent } from './task-operations.component';

xdescribe('TaskOperationsComponent', () => {
  let component: TaskOperationsComponent;
  let fixture: ComponentFixture<TaskOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
