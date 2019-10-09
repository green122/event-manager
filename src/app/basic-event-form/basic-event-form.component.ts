import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IForm } from '../models/app.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-event-form',
  templateUrl: './basic-event-form.component.html',
  styleUrls: ['./basic-event-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicEventFormComponent implements OnInit, IForm {

  form: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: ['John', Validators.required],
        eventDate: '01/01/01'
      }
    );
  }

  getForm() {
    return this.form;
  }
}
