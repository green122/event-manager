import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TEvent } from '../models/app.model';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events$: Observable<TEvent[]>;

  constructor(
    private readonly eventService: EventService,
    private readonly router: Router
  ) {}

  onDelete(id: string) {
    this.eventService.deleteEventId(id);
  }

  onEdit(id: string) {
    this.router.navigate(['edit', id]);
  }

  ngOnInit() {
    this.events$ = this.eventService.fetchEvents();
  }
}
