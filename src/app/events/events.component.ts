import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
import { EventType } from '../models/app.model';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @ViewChild(RouterOutlet, { static: false }) outlet: RouterOutlet;

  eventType = EventType;

  constructor(private readonly eventService: EventService, private readonly router: Router) { }

  onCreate(type: EventType) {
    this.eventService.createEventDraft(type);
    this.router.navigate(['create']);
  }

  ngOnInit() {
    console.log(this.outlet);
  }

}
