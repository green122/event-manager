import { Injectable } from '@angular/core';
import { from } from 'rxjs';
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
    id: '000',
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
export class AppService {
  private events: TEvent[] = fakeEvents;
  constructor() {}
  fetchEvents() {
    return from(new Promise<TEvent[]>(resolve => resolve(this.events)));
  }
}
