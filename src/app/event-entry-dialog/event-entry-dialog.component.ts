import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EventEditorComponent } from '../event-editor/event-editor.component';
import { EventService } from '../event.service';

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
    private readonly route: ActivatedRoute,
    private readonly changeDetector: ChangeDetectorRef
  ) {
    this.openDialog();
  }

  openDialog() {
    const create = this.route.snapshot.data.create;
    const id = this.route.snapshot.params.id;
    const dialogRef = this.dialog.open(EventEditorComponent, {
      data: {create, id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
      this.changeDetector.detectChanges();
    });
  }

  ngOnInit() {}
}
