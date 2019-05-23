import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderAnimationButtonComponent } from './border-animation-button.component';

describe('BorderAnimationButtonComponent', () => {
  let component: BorderAnimationButtonComponent;
  let fixture: ComponentFixture<BorderAnimationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderAnimationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderAnimationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
