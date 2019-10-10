import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { TEvent, EventType, ICall, AbstractFormData } from './models/app.model';

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

  private events$ = new BehaviorSubject<TEvent[]>(fakeEvents);
  constructor() {}
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

  createEvent = (eventData: TEvent) => {
    const id = String(Date.now());
    this.events.push({ ...eventData, id });
    this.events$.next(this.events);
    return from(new Promise(resolve => resolve()));
  }

  updateEvent(eventData: TEvent) {
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
