import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Observable } from 'rxjs';
import { TEvent } from './models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
