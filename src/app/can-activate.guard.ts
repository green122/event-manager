import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivateChild {
  constructor(
    private readonly eventService: EventService,
    private readonly router: Router
  ) {}
  canActivateChild(
    next: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { create } = next.data;
    const { id } = next.params;
    const type = this.eventService.getEventType();
    const wrongRoute = (create && !type) || (!create && !id);
    if (wrongRoute) {
      this.router.navigate(['']);
    }
    return !wrongRoute;
  }
}
