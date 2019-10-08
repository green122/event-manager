import { Component, OnInit, ContentChildren, QueryList, AfterContentChecked, ChangeDetectionStrategy, Input } from '@angular/core';
import { IForm, TEvent } from '../models/app.model';

@Component({
  selector: 'app-form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormManagerComponent implements OnInit, AfterContentChecked {
  @Input() event: TEvent;
  @ContentChildren('formContent') forms: QueryList<IForm>;
  constructor() {}

  ngOnInit() {}

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    this.forms.map(form => form.getForm());
  }
}
