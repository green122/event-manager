import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { TEvent, EventType } from '../../../models/app.model';
import { getDateTimeString, getDateString } from 'src/utils/getDateString';

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
    return getDateTimeString(eventDate, eventTime);
  }

  createdDateString() {
    if (!this.event) {
      return;
    }
    return getDateString(this.event.eventDate);
  }
  constructor() {}
  ngOnInit() {}
}
