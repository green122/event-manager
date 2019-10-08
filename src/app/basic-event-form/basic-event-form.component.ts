import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IForm } from '../models/app.model';

@Component({
  selector: 'app-basic-event-form',
  templateUrl: './basic-event-form.component.html',
  styleUrls: ['./basic-event-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicEventFormComponent implements OnInit, IForm {

  constructor() { }

  ngOnInit() {
  }

  getForm() {
    console.log('!!!!!!!!!!!!!!');
  }
}
