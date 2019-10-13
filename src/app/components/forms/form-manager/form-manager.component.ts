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
import { IForm, TEvent } from '../../../models/app.model';
import { FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormManagerService } from './form-manager.service';

// we use this component as 'master' component that collects all the children subforms and composes it in one and 
// manages it via IForm interface
@Component({
  selector: 'app-form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormManagerComponent implements OnInit, AfterContentInit {
  @Input() event: TEvent;
  @Input() submitText: string;
  @ContentChildren('formContent') formsChildren: QueryList<IForm>;
  @Output() submitData = new EventEmitter<any>();

  isFormInvalid$: Observable<boolean>;

  form: FormArray;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly formService: FormManagerService
  ) {}

  ngOnInit() {}

  setValuesToChildrenForms(event: TEvent) {
    if (this.formsChildren) {
      this.formsChildren.forEach(childForm => childForm.setValues(event));
    }
  }

  onSubmit() {
    const collectedData = this.formsChildren.map(childForm =>
      childForm.getValues()
    );
    this.submitData.emit(this.formService.prepareOutputFormData(collectedData));
  }

  ngAfterContentInit(): void {
    this.form = this.formBuilder.array(
      this.formsChildren.map(form => form.getForm())
    );
    setTimeout(() => this.setValuesToChildrenForms(this.event));
    this.isFormInvalid$ = this.form.statusChanges.pipe(
      map(status => status === 'INVALID'),
      startWith(this.form.invalid)
    );
  }
}
