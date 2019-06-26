import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCssNavBar2Component } from './pure-css-nav-bar2.component';

describe('PureCssNavBar2Component', () => {
  let component: PureCssNavBar2Component;
  let fixture: ComponentFixture<PureCssNavBar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureCssNavBar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureCssNavBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
