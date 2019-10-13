import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventEntryDialogComponent } from './event-entry-dialog/event-entry-dialog.component';
import { EventsComponent } from './components/events/events/events.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    canActivateChild: [CanActivateGuard],
    children: [
      {
        path: 'edit/:id',
        component: EventEntryDialogComponent,
        data: { create: false }
      },
      {
        path: 'create',
        canActivateChild: [CanActivateGuard],
        component: EventEntryDialogComponent,
        data: { create: true },
      }
    ]
  },
  { path: '**', component: EventListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
