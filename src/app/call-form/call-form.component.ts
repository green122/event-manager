import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TEvent, IForm, ICall } from '../models/app.model';
// import { get } from 'lodash';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.scss']
})
export class CallFormComponent implements OnInit, IForm {
  form: FormArray;
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.array(
      ['', '']
      // ['', Validators.compose([Validators.required, Validators.email])],
    );
  }

  getForm() {
    return this.form;
  }

  setValues(event: TEvent) {
    const { participants } = event as ICall;
    if (!participants || !participants.length) {
      return;
    }
    this.form.patchValue([participants[0].email, participants[1].email]);
  }

  getValues() {
    return { participants: this.form.value.map(email => ({ email })) };
  }
}
