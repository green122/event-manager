import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {
  tap,
  switchMap,
  catchError,
  map,
  takeUntil,
  takeWhile
} from 'rxjs/operators';
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

  submitData(data: AbstractFormData) {
    this.eventService.updateDataById(this.id, data as TEvent).pipe(
      map(() => {
        this.router.navigate(['/']);
        return true;
      }),
      takeWhile(Boolean),
      catchError(err => {
        console.log(err);
        return of(err);
      })
    ).subscribe();
  }

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService
  ) {}

  ngOnInit() {
    this.event$ = this.route.params.pipe(
      switchMap(value => {
        this.id = value.id;
        return this.eventService.getEventById(value.id);
      }),
      catchError(() => {
        this.router.navigate(['/']);
        return of({} as TEvent);
      })
    );
  }

  fillForm = (event: TEvent) => {
    console.log(event);
  }
}
