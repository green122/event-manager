import { Injectable } from '@angular/core';
import { AbstractFormData } from '../../../models/app.model';


@Injectable({
  providedIn: 'root'
})
export class FormManagerService {
  constructor() {}

  prepareOutputFormData(value: AbstractFormData[]) {
    const mergedData = value.reduce(
      (acc, current) => ({ ...acc, ...current }),
      {}
    );
    return mergedData;
  }
}
