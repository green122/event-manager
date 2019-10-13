import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EventEditorComponent } from '../event-editor/event-editor.component';
import { EventService } from '../event.service';
import { tap, take, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TEvent } from '../models/app.model';

@Component({
  selector: 'app-event-entry-dialog',
  templateUrl: './event-entry-dialog.component.html',
  styleUrls: ['./event-entry-dialog.component.scss']
})
export class EventEntryDialogComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly eventService: EventService,
    public dialog: MatDialog,
    private readonly route: ActivatedRoute
  ) {
    this.openDialog();
  }

  openDialog() {
    const create = this.route.snapshot.data.create;
    const id = this.route.snapshot.params.id;

    const type = this.eventService.getEventType();
    const wrongRoute = (create && !type) || (!create && !id);

    if (wrongRoute) {
      setTimeout(() => this.router.navigate(['/']));
      return;
    }

    const event$ = create
      ? of({} as TEvent)
      : this.eventService.getEventById(id);

    event$
      .pipe(
        tap(event => {
          const dialogRef = this.dialog.open(EventEditorComponent, {
            data: { create, id, event, type }
          });
          dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['/']);
          });
        }),
        take(1),
        catchError(() => {
          this.router.navigate(['/']);
          return of({} as TEvent);
        })
      )
      .subscribe();
  }

  ngOnInit() {}
}
