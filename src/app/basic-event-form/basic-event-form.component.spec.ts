import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEventFormComponent } from './basic-event-form.component';

describe('BasicEventFormComponent', () => {
  let component: BasicEventFormComponent;
  let fixture: ComponentFixture<BasicEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
