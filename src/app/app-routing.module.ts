import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { EventListComponent } from './event-list/event-list.component';


const routes: Routes = [
  { path: 'edit/:id', component: EventEditorComponent,  data: {create: false } },
  { path: 'create', component: EventEditorComponent, data: {create: true} },
  { path: '**', component: EventListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
