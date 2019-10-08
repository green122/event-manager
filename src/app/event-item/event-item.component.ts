import { Component, OnInit, Input } from '@angular/core';
import { TEvent, EventType } from '../models/app.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {
  @Input() event: TEvent;
  EventType = EventType;

  constructor() {}
  ngOnInit() {}
}
