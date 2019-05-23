import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCssNavBar1Component } from './pure-css-nav-bar1.component';

describe('PureCssNavBar1Component', () => {
  let component: PureCssNavBar1Component;
  let fixture: ComponentFixture<PureCssNavBar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureCssNavBar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureCssNavBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
