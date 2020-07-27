import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';

describe('TodoListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  it('onCreate should pop up form'), () => {
    expect(component.onCreate()).toBeTrue()
  }

  it('onEdit should should pop up dialogue '), () => {
    
    expect(component.onEdit(new Object)).toBeTrue()
  }

  it('drop should move item', () => {
    
    expect(component.drop( Object[0])).toBeTrue()
  });

  it('click function should log string', () => {
    
    expect(component.onClick()).toEqual('Clicked')
  });




});
