import { Component, OnInit } from '@angular/core';
import { EventService } from './app.service';
import { Observable } from 'rxjs';
import { TEvent } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'event-mngr';
  constructor(public eventService: EventService) {
  }

  ngOnInit(): void {
  }
}
