import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TEvent, IForm, ICall, IMeeting } from '../models/app.model';
// import { get } from 'lodash';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss']
})
export class MeetingFormComponent implements OnInit, IForm {
  form: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        address: '',
        participants: this.formBuilder.array(['', '', ''])
      }
      // ['', Validators.compose([Validators.required, Validators.email])],
    );
  }

  getForm() {
    return this.form;
  }

  setValues(event: TEvent) {
    const { participants, address } = event as IMeeting;
    if (!participants || !participants.length) {
      return;
    }
    this.form.patchValue({
      participants: [
        participants[0].name,
        participants[1].name,
        participants[2].name
      ]
    });
  }

  getValues() {
    return {
      participants: this.form.value.participants.map(email => ({ email })),
      address: this.form.value.address
    };
  }
}
