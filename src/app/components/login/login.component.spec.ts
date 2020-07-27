import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should signOut', () => {
    expect(component.isLoggedIn).toBeTrue();
    component.signOut();
    expect(component).toBeFalsy();
  } );

  it('should create', () => {
    expect(component).toBeFalsy();
  });

  it('should refresh', () => {
    expect(component).toBeFalsy();
    component.refresh();
    expect(component).toBeTruthy();
  } );





});
