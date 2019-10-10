import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap, catchError, map, takeWhile } from 'rxjs/operators';
import { EventService } from '../event.service';
import { TEvent, AbstractFormData } from '../models/app.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {
  event$: Observable<TEvent>;
  id: string;
  create = false;

  submitData(data: AbstractFormData) {
    const eventFunction = this.create
      ? this.eventService.createEvent
      : this.eventService.updateEvent;

    eventFunction(data as TEvent)
      .pipe(
        map(() => {
          this.router.navigate(['/']);
          return true;
        }),
        takeWhile(Boolean),
        catchError(err => {
          console.log(err);
          return of(err);
        })
      )
      .subscribe();
  }

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService
  ) {}

  ngOnInit() {
    this.create = this.route.snapshot.data.create;
    this.id = this.route.snapshot.params.id;

    this.event$ = !this.create
      ? this.eventService.getEventById(this.id).pipe(
          catchError(() => {
            this.router.navigate(['/']);
            return of({} as TEvent);
          })
        )
      : of({} as TEvent);
  }
}
