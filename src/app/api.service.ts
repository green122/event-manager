import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ICallParticipant,
  TEvent
} from './models/app.model';
import { getDateTimeString } from 'src/utils/getDateString';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  sendNotification(event: TEvent) {
    const emails = (event.participants as ICallParticipant[])
      .map(participant => participant.email)
      .filter(Boolean);
    const html = `<div>
      <h5>Event notification </h5>
      <h4>${event.name}</h4>
      <div>You will have a call</div>
      <div>${getDateTimeString(event.eventDate, event.eventTime)}
    </div>`;
    return this.httpClient.post(
      ' https://boiling-garden-91483.herokuapp.com/emails',
      { emails, html }
    );
  }
}
