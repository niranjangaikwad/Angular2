import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/components/event-list.component';
import { EventThumbnails } from './events/components/event-thumbnails.component';
import { EmployeeListComponent } from './employee/components/employee-list.component';
import { FirstLetterCapital } from './events/shared/first-letter-capital.pipe';
import { EventFilterPipe } from './events/shared/event-filter.pipe';

import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EventListComponent, EmployeeListComponent, EventThumbnails, FirstLetterCapital, EventFilterPipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
