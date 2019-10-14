import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateGuard } from './can-activate.guard';
import { EventService } from './event.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

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

  it('should work', inject([CanActivateGuard], (guard: CanActivateGuard) => {
    expect(guard).toBeTruthy();
    const result = guard.canActivateChild(({
      data: { create: true },
      params: {}
    } as unknown) as ActivatedRouteSnapshot);
    expect(result).toBe(true);
  }));
});
