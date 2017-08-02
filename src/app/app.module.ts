import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/components/event-list.component';
import { EventThumbnails } from './events/components/event-thumbnails.component';
import { EmployeeListComponent } from './employee/components/employee-list.component';
import { FirstLetterCapital } from './events/shared/first-letter-capital.pipe';
import { EventFilterPipe } from './events/shared/event-filter.pipe';
import { UsersList } from './users/components/users.component';

import { UsersService } from './users/services/users.service';
import { HttpModule } from "@angular/http";

import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, EventListComponent, EmployeeListComponent, EventThumbnails, FirstLetterCapital, EventFilterPipe, UsersList],
  providers: [UsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
