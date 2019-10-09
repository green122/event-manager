import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.scss']
})
export class CallFormComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) { }


  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        participant1: 'Jackie Chan',
        participant2: 'Darth Weider'
      }
    );
  }

  getForm() {
    return this.form;
  }


}
