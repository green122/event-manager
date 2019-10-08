import { TestBed } from '@angular/core/testing';

import { EventService } from './app.service';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });
});
