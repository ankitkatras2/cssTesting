import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwaterPatternComponent } from './underwater-pattern.component';

describe('UnderwaterPatternComponent', () => {
  let component: UnderwaterPatternComponent;
  let fixture: ComponentFixture<UnderwaterPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderwaterPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwaterPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
