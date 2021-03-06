/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DueDateComponent } from './dueDate.component';

xdescribe('DueDateComponent', () => {
  let component: DueDateComponent;
  let fixture: ComponentFixture<DueDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
