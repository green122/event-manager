import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { TEvent, EventType } from '../../../models/app.model';
import { getDateTimeString, getDateString } from 'src/utils/getDateString';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventItemComponent implements OnInit, OnDestroy {
  @Input() event: TEvent;
  EventType = EventType;
  subscription: Subscription;

  @Output() deleteHandler = new EventEmitter<string>();
  @Output() editHandler = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  dateString() {
    if (!this.event) {
      return;
    }
    const { eventDate, eventTime } = this.event;
    return getDateTimeString(eventDate, eventTime);
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px'
    });

    this.subscription = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteHandler.emit(this.event.id);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createdDateString() {
    if (!this.event) {
      return;
    }
    return getDateString(this.event.eventDate);
  }

  ngOnInit() {}
}
