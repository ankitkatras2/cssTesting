import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipButton3DComponent } from './flip-button3-d.component';

describe('FlipButton3DComponent', () => {
  let component: FlipButton3DComponent;
  let fixture: ComponentFixture<FlipButton3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipButton3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipButton3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
