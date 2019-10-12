import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap, catchError, map, takeWhile } from 'rxjs/operators';
import { EventService } from '../event.service';
import { TEvent, AbstractFormData } from '../models/app.model';
import { Observable, of } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

    eventFunction({ ...data, id: this.data.id } as TEvent)
      .pipe(
        map(() => {
          this.router.navigate(['/']);
          this.dialogRef.close();
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
    public dialogRef: MatDialogRef<EventEditorComponent>,
    private readonly router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly eventService: EventService
  ) {}

  ngOnInit() {
    const create = this.data.create;
    const id = this.data.id;
    this.event$ = !create
      ? this.eventService.getEventById(id).pipe(
          catchError(() => {
            this.router.navigate(['/']);
            return of({} as TEvent);
          })
        )
      : of({} as TEvent);
  }
}
