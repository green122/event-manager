import { Component, OnInit, Input } from '@angular/core';
import { TEvent } from '../models/app.model';


@Component({
  selector: 'app-call-item',
  templateUrl: './call-item.component.html',
  styleUrls: ['./call-item.component.scss']
})
export class CallItemComponent {
  @Input() event: TEvent;

}
