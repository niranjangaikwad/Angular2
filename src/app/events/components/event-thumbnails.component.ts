import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Event } from '../models/event.model';

@Component({
    selector: "event-thumbnails",
    templateUrl: "app/events/views/event-thumbnails.component.html"
})

export class EventThumbnails {
    @Input() event: Event;
    //Create eventemitter channel
    @Output() photoDetails: EventEmitter<string> = new EventEmitter<string>();
    checkedOut(){
        this.photoDetails.emit("Photo has been confirmed");
    }
}