import { Component, OnInit, Input } from '@angular/core';
import { TEvent } from '../models/app.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input() events: TEvent[] = [];

  constructor() { }

  ngOnInit() {
  }

}
