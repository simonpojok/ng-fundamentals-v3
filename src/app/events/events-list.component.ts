import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import * as events from 'events';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <app-event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
