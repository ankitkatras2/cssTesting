import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialButtons1Component } from './social-buttons1.component';

describe('SocialButtons1Component', () => {
  let component: SocialButtons1Component;
  let fixture: ComponentFixture<SocialButtons1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialButtons1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialButtons1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
