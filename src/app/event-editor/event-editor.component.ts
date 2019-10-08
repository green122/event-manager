import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { EventService } from '../event.service';
import { TEvent } from '../models/app.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event$: Observable<TEvent>;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService
  ) {}

  ngOnInit() {
    this.event$ = this.route.params
      .pipe(
        switchMap(value => this.eventService.getEventById(value.id)),
        catchError(() => {
          this.router.navigate(['/']);
          return of({} as TEvent);
        })
      )
  }

  fillForm = (event: TEvent) => {
    console.log(event);
  }
}
