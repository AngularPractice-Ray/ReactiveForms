import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayExampleComponent } from './formarray-example.component';

describe('FormarrayExampleComponent', () => {
  let component: FormarrayExampleComponent;
  let fixture: ComponentFixture<FormarrayExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormarrayExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
