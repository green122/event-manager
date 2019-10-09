import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  Input,
  AfterContentInit
} from '@angular/core';
import { IForm, TEvent } from '../models/app.model';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormManagerComponent implements OnInit, AfterContentInit {
  @Input() event: TEvent;
  @ContentChildren('formContent') formsChildren: QueryList<IForm>;

  form: FormArray;
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.form = this.formBuilder.array(
      this.formsChildren.map(form => form.getForm())
    );
    this.form.statusChanges.subscribe(console.log);
    this.form.valueChanges.subscribe(console.log);
  }
}
