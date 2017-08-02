import { Component } from '@angular/core';

import { Event } from '../models/event.model';

@Component({
    selector: "event-list",
    /*template: `
    <h1>{{title}}</h1>
    <hr/>
    <h3>{{subtitle}}</h3>
    `*/
    templateUrl: "app/events/views/event-list.component.html",
    styles: [`
        .clsTd { background: #cff; }
        .clsTh { background: #abe; }
        .cheap { background: #afb; }
        .medium { background: #fa2; }
        .expensive {background: #f22; }
    `]
})

export class EventListComponent {
    title: string = "Events Portal";
    subtitle: string = "Displaying the list of Events organized";
    filterBy: string = "";
    events: Event[] = [
        {
            "eventId": 1,
            "eventName": "Angular 2 - Seminar",
            "eventCode": "NG-SEMI234",
            "releaseDate": new Date().toString(),
            "description": "Angular 2 - Introduction to New features in Angular 2.",
            "fees": 500,
            "popularity": 4.2,
            "imageUrl": "app/events/Images/Chrysanthemum.jpg"
        },
        {
            "eventId": 2,
            "eventName": "jQuery 3 - Seminar",
            "eventCode": "JQ-SEMI424",
            "releaseDate": new Date().toString(),
            "description": "jQuery 3 - Introduction to New features in jQuery 3.",
            "fees": 300,
            "popularity": 3.2,
            "imageUrl": "app/events/Images/Desert.jpg"
        },
        {
            "eventId": 3,
            "eventName": "Angular 2 - Best Practices",
            "eventCode": "NG-PNP279",
            "releaseDate": new Date().toString(),
            "description": "Angular 2 - Patterns and Practices and how to write best code.",
            "fees": 700,
            "popularity": 4.4,
            "imageUrl": "app/events/Images/Hydrangeas.jpg"
        },
        {
            "eventId": 4,
            "eventName": "Angular 2 - Migration",
            "eventCode": "NG-MI377",
            "releaseDate": new Date().toString(),
            "description": "Angular 2 - Migration from Angular JS 1.x to Angular 2.",
            "fees": 900,
            "popularity": 4.9,
            "imageUrl": "app/Events/Images/Jellyfish.jpg"
        },
        {
            "eventId": 5,
            "eventName": "Angular 2 - Rapid Fire",
            "eventCode": "NG-RF945",
            "releaseDate": new Date().toString(),
            "description": "Angular 2 - Rapid Fire Session on Angular 2.",
            "fees": 300,
            "popularity": 3.3,
            "imageUrl": "app/Events/Images/Lighthouse.jpg"
        }
    ];
    changeMe(indx: number, evtName: string): void {
        //console.log("Change Me!");
        /*this.events.forEach(element => {
            if (element.eventId == indx) {
                element.eventName = evtName;
            }
        });*/
        this.events[indx].eventName = evtName;
    }

    getColorClass(fees: number): any {
        if (fees == 300) {
            return ['cheap'];
        } else if (fees == 500) {
            return ['medium'];
        }
        return ['expensive'];
    }

    selectedEvent: Event;
    displayPhoto(event: Event): void {
        this.selectedEvent = event;
    }

    photoClickedMessage: string = "not checked out";
    isPhotoClicked(message: string): void {
        console.log("Message Received");
        this.photoClickedMessage = message;
    }
}