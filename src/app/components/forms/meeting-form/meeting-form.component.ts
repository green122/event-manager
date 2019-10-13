import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TEvent, IForm, ICall, IMeeting } from '../../../models/app.model';
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
    this.form = this.formBuilder.group({
      address: ['', Validators.required],
      participants: this.formBuilder.array([
        ['', Validators.required],
        ['', Validators.required],
        ['', Validators.required]
      ])
    });
  }

  getForm() {
    return this.form;
  }

  getParticipantError(index: number) {
    return (this.form.controls.participants as FormArray).controls[index].errors;
  }

  setValues(event: TEvent) {
    const { participants, address } = event as IMeeting;
    if (!participants || !participants.length) {
      return;
    }
    this.form.patchValue({
      address,
      participants: [
        participants[0].name,
        participants[1].name,
        participants[2].name
      ]
    });
  }

  getValues() {
    return {
      participants: this.form.value.participants.map(name => ({ name })),
      address: this.form.value.address
    };
  }
}
