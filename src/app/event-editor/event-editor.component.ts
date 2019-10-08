import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
    ) {
    console.log('222222');
    }

  ngOnInit() {
    this.route.params.pipe(tap(console.log)).subscribe();
    this.router.navigate(['/']);
  }
}
