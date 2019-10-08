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

  private event$  = new BehaviorSubject<TEvent[]>(fakeEvents);
  constructor() {}
  fetchEvents() {
    return this.event$;
  }
  deleteId(deleteId: string) {
    const newEvents = this.events.filter(({id}) => id !== deleteId);
    this.event$.next(newEvents);
  }
}
