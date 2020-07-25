import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDarkComponent } from './light-dark.component';

describe('LightDarkComponent', () => {
  let component: LightDarkComponent;
  let fixture: ComponentFixture<LightDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change boolean', () => {
      expect(component.theme).toBeFalsy();
      component.themeChange();
      fixture.detectChanges();
      expect(component.theme).toBeTruthy();

  });
});
