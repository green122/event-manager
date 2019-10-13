import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventEntryDialogComponent } from './event-entry-dialog/event-entry-dialog.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: 'edit/:id',
        component: EventEntryDialogComponent,
        data: { create: false }
      },
      {
        path: 'create',
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
