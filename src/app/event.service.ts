import { Injectable } from '@angular/core';
import { from, BehaviorSubject, Observable, of } from 'rxjs';
import { TEvent, EventType, ICall, AbstractFormData } from './models/app.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';

const fakeEvents: TEvent[] = [
  {
    id: '000',
    type: EventType.CALL,
    name: 'nameAAA',
    eventDate: new Date(),
    createdDate: new Date(),
    participants: [{ email: 'ww@cc.com' }, { email: 'dd@dd.cc' }]
  },
  {
    id: '001',
    type: EventType.MEETING,
    name: 'name',
    eventDate: new Date(),
    createdDate: new Date(),
    participants: [{ email: 'ww@cc.com' }, { email: 'dd@dd.cc' }],
    address: 'fakeAddress'
  }
];

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: TEvent[] = fakeEvents;
  private draft: EventType | '' = '';

  private events$ = new BehaviorSubject<TEvent[]>(fakeEvents);
  constructor(private snackBar: MatSnackBar) {}
  fetchEvents() {
    return this.events$.asObservable();
  }
  deleteEventId(eventId: string) {
    const newEvents = this.events.filter(({ id }) => id !== eventId);
    this.events$.next(newEvents);
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
    return Promise.resolve(this.draft);
  }

  getEventAfterCreateHook(eventData: TEvent): Observable<any> {
    return eventData.type === EventType.CALL
      ? from(
          new Promise(() => {
            setTimeout(() => {
              this.snackBar.open('Emails have been successfully sent', null, {
                duration: 2000
              });
            }, 2000);
          })
        )
      : of({});
  }

  createEvent = (eventData: TEvent) => {
    const id = String(Date.now());
    this.events.push({ ...eventData, id });
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
          this.events[eventIndex] = eventData;
          this.events$.next(this.events);
          resolve();
        } else {
          reject('Event wasnt found');
        }
      })
    );
  }
}
