import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { IForm } from '../models/app.model';

@Component({
  selector: 'app-form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss']
})
export class FormManagerComponent implements OnInit {
  @ContentChildren('formContent') forms: QueryList<IForm>;
  constructor() {}

  ngOnInit() {}

  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    this.forms.map(form => form.getForm());
  }
}
