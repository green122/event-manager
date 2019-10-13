import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { TEvent, EventType } from '../models/app.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventItemComponent implements OnInit {
  @Input() event: TEvent;
  EventType = EventType;

  @Output() deleteHandler = new EventEmitter<string>();
  @Output() editHandler = new EventEmitter<string>();

  dateString() {
    if (!this.event) {
      return;
    }
    const { eventDate, eventTime } = this.event;
    const dateLocale = eventDate.toLocaleDateString('en-EN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'long'
    });
    const dateTimeZone = eventDate
      .toLocaleDateString('en-EN', {
        timeZoneName: 'short'
      })
      .split(' ')
      .slice(1);
    return `${dateLocale} ${eventTime} ${dateTimeZone}`;
  }

  createdDateString() {
    if (!this.event) {
      return;
    };
    return this.event.createdDate.toLocaleDateString('en-EN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  constructor() {}
  ngOnInit() {}
}
