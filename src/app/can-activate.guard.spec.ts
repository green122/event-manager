import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateGuard } from './can-activate.guard';
import { EventService } from './event.service';
import { Router } from '@angular/router';

describe('CanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CanActivateGuard,
        { provide: EventService, useValue: { getEventType: () => 'id' } },
        { provide: Router, useValue: { navigate: () => 'id' } }
      ]
    });
  });

  it('should ...', inject([CanActivateGuard], (guard: CanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
