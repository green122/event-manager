import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEntryDialogComponent } from './event-entry-dialog.component';

describe('EventEntryDialogComponent', () => {
  let component: EventEntryDialogComponent;
  let fixture: ComponentFixture<EventEntryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEntryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
