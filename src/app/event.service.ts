import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { TEvent, EventType } from './models/app.model';

const fakeEvents: TEvent[] = [
  {
    id: '000',
    type: EventType.CALL,
    name: 'name',
    eventDate: new Date(),
    createdDate: new Date(),
    participants: []
  },
  {
    id: '001',
    type: EventType.MEETING,
    name: 'name',
    eventDate: new Date(),
    createdDate: new Date(),
    participants: [],
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
    return this.events$;
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
}
