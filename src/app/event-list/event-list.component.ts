import { Component, OnInit, Input } from '@angular/core';
import { TEvent } from '../models/app.model';
import { EventService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events$: Observable<TEvent[]>;

  constructor(private readonly eventService: EventService) {}

  onDelete(id: string){
    this.eventService.deleteId(id);
  }

  onEdit(id: string){
    console.log(id);
  }

  ngOnInit() {
    this.events$ = this.eventService.fetchEvents();
  }
}
