import { Component, OnInit, Input } from '@angular/core';
import { TEvent, IMeeting } from '../models/app.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-meeting-item',
  templateUrl: './meeting-item.component.html',
  styleUrls: ['./meeting-item.component.scss']
})
export class MeetingItemComponent implements OnInit {
  @Input() event: TEvent;
  constructor(private readonly eventService: EventService) { }

  ngOnInit() {
    console.log(this.event);
  }

  goToMapApp() {
    this.eventService.goToMapApp((this.event as IMeeting).address);
  }

}
