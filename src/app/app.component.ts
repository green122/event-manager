import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'event-mngr';
  events: Observable<Event[]>;
  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
    this.events = this.appService.fetchEvents();
  }
}
