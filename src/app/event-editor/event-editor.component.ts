import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap, catchError, map, takeWhile, tap } from 'rxjs/operators';
import { EventService } from '../event.service';
import { TEvent, AbstractFormData, EventType } from '../models/app.model';
import { Observable, of } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {
  event$: Observable<TEvent>;
  create: boolean;
  id: string;
  type$: Observable<EventType | ''>;

  eventType = EventType;

  submitData(formData: AbstractFormData) {
    const eventFunction = this.create
      ? this.eventService.createEvent
      : this.eventService.updateEvent;

    eventFunction({ ...formData, id: this.id } as TEvent)
      .pipe(
        map(() => {
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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly eventService: EventService
  ) {
    this.create = data.create;
    this.id = data.id;
  }

  getSubmitText(type: EventType) {
    return this.create ? `Create ${type}` : `Update ${type}`;
  }

  ngOnInit() {
    this.type$ = this.eventService.getEventType().pipe(
      tap(type => {
        if (this.create && !type) {
          this.dialogRef.close();
        }
      })
    );

    this.event$ = !this.create
      ? this.eventService.getEventById(this.id).pipe(
          catchError(() => {
            this.dialogRef.close();
            return of({} as TEvent);
          })
        )
      : of({} as TEvent);
  }
}
