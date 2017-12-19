import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderExampleComponent } from './formbuilder-example.component';

describe('FormbuilderExampleComponent', () => {
  let component: FormbuilderExampleComponent;
  let fixture: ComponentFixture<FormbuilderExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbuilderExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
