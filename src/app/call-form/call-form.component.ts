import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TEvent, IForm, ICall } from '../models/app.model';
// import { get } from 'lodash';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.scss']
})
export class CallFormComponent implements OnInit, IForm {
  form: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      participant1: '', // ['', Validators.compose([Validators.required, Validators.email])],
      participant2: ''
    });
  }

  getForm() {
    return this.form;
  }

  setValue(event: TEvent) {
    console.log(event);
    const { participants } = event as ICall;
    if (!participants.length) {
      return;
    }
    this.form.patchValue({
      participant1: participants[0].email,
      participant2: participants[1].email
    });
  }
}
