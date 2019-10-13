import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IForm, TEvent } from '../../../models/app.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-event-form',
  templateUrl: './basic-event-form.component.html',
  styleUrls: ['./basic-event-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicEventFormComponent implements OnInit, IForm {
  form: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventTime: ['01:00:00', Validators.required]
    });
  }

  getForm() {
    return this.form;
  }

  setValues(event: TEvent) {
    const { name, eventDate, eventTime } = event;
    this.form.patchValue({ name, eventDate, eventTime });
  }
  
  getValues() {
    const { eventTime } = this.form.value;

    return {
      ...this.form.value,
      eventTime:
        eventTime.format ? eventTime.format('hh:mm:ss') : eventTime
    };
  }
}
