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

  dateString(date: Date) {
    return date.toLocaleDateString('en-EN', {
      year: 'numeric',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  }
  constructor() {}
  ngOnInit() {}
}
