import { Component, Input } from '@angular/core';
import { TEvent, IMeeting } from '../../../models/app.model';
import { EventService } from '../../../event.service';

@Component({
  selector: 'app-meeting-item',
  templateUrl: './meeting-item.component.html',
  styleUrls: ['./meeting-item.component.scss']
})
export class MeetingItemComponent {
  @Input() event: TEvent;
  constructor(private readonly eventService: EventService) {}

  goToMapApp() {
    this.eventService.goToMapApp((this.event as IMeeting).address);
  }
}
