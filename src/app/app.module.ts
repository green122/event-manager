import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventListComponent } from './event-list/event-list.component';
import { EventItemComponent } from './event-item/event-item.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { FormManagerComponent } from './form-manager/form-manager.component';
import { BasicEventFormComponent } from './basic-event-form/basic-event-form.component';
import { MeetingItemComponent } from './meeting-item/meeting-item.component';
import { CallItemComponent } from './call-item/call-item.component';
import { CallFormComponent } from './call-form/call-form.component';

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
    CallFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {}
