import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  Input,
  AfterContentInit,
  EventEmitter,
  Output
} from '@angular/core';
import { IForm, TEvent } from '../models/app.model';
import { FormArray, FormBuilder } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { tap, map, startWith, withLatestFrom, take } from 'rxjs/operators';

@Component({
  selector: 'app-form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormManagerComponent implements OnInit, AfterContentInit {
  @Input() event: TEvent;
  @ContentChildren('formContent') formsChildren: QueryList<IForm>;
  @Output() submitData = new EventEmitter<any>();

  onSubmit = new EventEmitter<void>();
  isFormInvalid$: Observable<boolean>;

  form: FormArray;
  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    this.form = this.formBuilder.array(
      this.formsChildren.map(form => form.getForm())
    );
    this.isFormInvalid$ = this.form.statusChanges.pipe(
      map(status => status === 'INVALID'),
      startWith(this.form.invalid)
    );
    this.onSubmit
      .pipe(
        withLatestFrom(this.form.valueChanges),
        take(1)
      )
      .subscribe(value => this.submitData.emit(value));
  }
}
