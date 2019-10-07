import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { TEvent } from './models/app.model';

const fakeEvents: TEvent[] = [
  { name: 'name', eventDate: new Date(), createdDate: new Date(), participants: []},
  { name: 'name', eventDate: new Date(), createdDate: new Date(), participants: [], address: 'fakeAddress'}
];

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private events: Event[] = [];
  constructor() {}
  fetchEvents() {
    return from(new Promise<Event[]>(resolve => resolve(this.events)));
  }
}
