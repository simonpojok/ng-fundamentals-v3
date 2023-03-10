import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEventModel} from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }

    .event-image {
      height: 100px;
    }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEventModel;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.event = this.eventService.getEvent(+id);
  }
}
