import { PipeTransform, Pipe } from '@angular/core';
import { Event } from '../models/event.model';

@Pipe({
    name: 'eventFilter'
})

export class EventFilterPipe implements PipeTransform {
    transform(value: Event[], args: string[]): Event[] {
        let filter: string = args[0] ? args[0].toLowerCase() : null;
        return filter ? value.filter((event: Event) =>
            event.eventName[0].toLowerCase() == filter) : value;
    }
}