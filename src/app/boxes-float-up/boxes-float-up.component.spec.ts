import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesFloatUpComponent } from './boxes-float-up.component';

describe('BoxesFloatUpComponent', () => {
  let component: BoxesFloatUpComponent;
  let fixture: ComponentFixture<BoxesFloatUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesFloatUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesFloatUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
