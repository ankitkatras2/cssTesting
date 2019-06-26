import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtons1Component } from './radio-buttons1.component';

describe('RadioButtons1Component', () => {
  let component: RadioButtons1Component;
  let fixture: ComponentFixture<RadioButtons1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtons1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtons1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
