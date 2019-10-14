import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { take, switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';
import { TEvent } from './models/app.model';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('EventService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatSnackBar,
          useValue: { open: () => ({}) }
        },
        {
          provide: ApiService,
          useValue: { sendNotification: () => of({}) }
        }
      ]
    })
  );

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });

  it('should create new event', () => {
    const service: EventService = TestBed.get(EventService);
    const event$ = service.fetchEvents();
    service
      .createEvent({ name: 'testevent', participants: [] } as TEvent)
      .pipe(switchMap(() => event$.pipe(take(1))))
      .subscribe(events => expect(events.length).toBe(3));
  });
});
