import { Injectable } from '@angular/core';
import { from, BehaviorSubject, Observable, of } from 'rxjs';
import { TEvent, EventType, ICall, AbstractFormData } from './models/app.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take, tap } from 'rxjs/operators';
import { ApiService } from './api.service';

const fakeEvents: TEvent[] = [
  {
    id: '000',
    type: EventType.CALL,
    name: 'Very important call',
    eventDate: new Date(),
    eventTime: '07:34:10',
    createdDate: new Date(),
    participants: [{ email: 'test@test.com' }, { email: 'somemail@mail.com' }]
  },
  {
    id: '001',
    type: EventType.MEETING,
    name: 'How to conquer the world!!! (Bi-weekly, retrospective)',
    eventTime: '07:34:00',
    eventDate: new Date(),
    createdDate: new Date(),
    participants: [
      { name: 'Darth Vader' },
      { name: 'Princess Leia' },
      { name: 'Jackie Chan' }
    ],
    address: 'Potsdamer Platz'
  }
];

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: TEvent[] = fakeEvents;
  private draft: EventType = EventType.NOOP;

  private events$ = new BehaviorSubject<TEvent[]>(fakeEvents);
  constructor(private snackBar: MatSnackBar, private apiService: ApiService) {}

  fetchEvents() {
    return this.events$.asObservable();
  }

  deleteEventById(eventId: string) {
    this.events = this.events.filter(({ id }) => id !== eventId);
    this.events$.next(this.events);
  }

  getEventById(eventId: string) {
    const event = this.events.find(({ id }) => id === eventId);
    return from(
      new Promise<TEvent>((resolve, reject) =>
        event ? resolve(event) : reject('Event wasnt found')
      )
    );
  }

  createEventDraft(type: EventType) {
    this.draft = type;
  }

  getEventType() {
    return this.draft;
  }

  getEventAfterCreateHook(eventData: TEvent): Observable<any> {
    return eventData.type === EventType.CALL
      ? this.apiService.sendNotification(eventData).pipe(
          tap(() =>
            this.snackBar.open('Emails have been successfully sent', null, {
              duration: 2000
            })
          )
        )
      : of({});
  }

  createEvent = (eventData: TEvent) => {
    const createdDate = new Date();
    const id = String(createdDate);
    this.events.push({ ...eventData, id, createdDate });
    this.events$.next(this.events);
    this.getEventAfterCreateHook(eventData)
      .pipe(take(1))
      .subscribe();
    return from(new Promise(resolve => resolve()));
  }

  updateEvent = (eventData: TEvent) => {
    const eventIndex = this.events.findIndex(({ id }) => id === eventData.id);
    return from(
      new Promise<TEvent>((resolve, reject) => {
        if (eventIndex > -1) {
          const prevEvent = this.events[eventIndex];
          this.events[eventIndex] = { ...prevEvent, ...eventData };
          this.events$.next(this.events);
          resolve();
        } else {
          reject('Event wasnt found');
        }
      })
    );
  }

  goToMapApp(address: string) {
    const addressRequest = address.replace(/\s\s+/g, '+');
    window.open(`//maps.google.com/maps/search/${addressRequest}`, '_blank');
  }
}
