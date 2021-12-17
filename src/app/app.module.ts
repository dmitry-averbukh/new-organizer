import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { MeetingsEditComponent } from './meetings/meetings-edit/meetings-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    MeetingsComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactDetailComponent,
    MeetingsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
