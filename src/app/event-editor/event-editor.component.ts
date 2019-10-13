import { Component, Inject } from '@angular/core';
import { catchError, map, takeWhile } from 'rxjs/operators';
import { EventService } from '../event.service';
import { TEvent, AbstractFormData, EventType } from '../models/app.model';
import { of } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent {
  event: TEvent;
  create: boolean;
  id: string;
  type: EventType | '';

  eventType = EventType;

  submitData(formData: AbstractFormData) {
    const eventFunction = this.create
      ? this.eventService.createEvent
      : this.eventService.updateEvent;

    eventFunction({ ...formData, id: this.id, type: this.type } as TEvent)
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
    this.event = data.event;
    this.type = data.type || data.event.type;
  }

  getSubmitText(type: EventType) {
    return this.create ? `Create ${type}` : `Update ${type}`;
  }
}
