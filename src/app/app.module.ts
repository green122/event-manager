import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventItemComponent } from './components/events/event-item/event-item.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { FormManagerComponent } from './components/forms/form-manager/form-manager.component';
import { BasicEventFormComponent } from './components/forms/basic-event-form/basic-event-form.component';
import { MeetingItemComponent } from './components/events/meeting-item/meeting-item.component';

import { CallFormComponent } from './components/forms/call-form/call-form.component';
import { EventEntryDialogComponent } from './event-entry-dialog/event-entry-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {DpDatePickerModule} from 'ng2-date-picker';
import { EventsComponent } from './components/events/events/events.component';
import { MeetingFormComponent } from './components/forms/meeting-form/meeting-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CallItemComponent } from './components/events/call-item/call-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventItemComponent,
    EventEditorComponent,
    FormManagerComponent,
    BasicEventFormComponent,
    MeetingItemComponent,
    CallItemComponent,
    CallFormComponent,
    EventEntryDialogComponent,
    EventsComponent,
    MeetingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DpDatePickerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
    MatNativeDateModule,
  ],
  entryComponents: [EventEditorComponent],
  providers: [FormBuilder],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
