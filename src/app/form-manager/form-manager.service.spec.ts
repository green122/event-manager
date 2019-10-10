import { TestBed } from '@angular/core/testing';

import { FormManagerService } from './form-manager.service';

describe('FormManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormManagerService = TestBed.get(FormManagerService);
    expect(service).toBeTruthy();
  });
});
