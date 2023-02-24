import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  styles: [
    `
        .pad-left {
            padding-left: 20px;
        }

        .well div {
            color: #bbb
        }

        .thumbnail {
            min-height: 210px;
        }
    `
  ],
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div>Time: {{event?.time}}</div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">Online Url: {{event.onlineUrl}}</div>
    </div>
  `,
})
export class EventThumbnailComponent {
  @Input() event: any;

  logFoo = () => {
    console.log('fOO');
  };
}
