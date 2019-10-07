import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { TEvent } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'event-mngr';
  events: Observable<TEvent[]>;
  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
    this.events = this.appService.fetchEvents();
  }
}
