import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEventModel} from './shared';

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

      .green {
        color: #003300 !important;
      }

      .bold {
        font-weight: bold;
      }
    `
  ],
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
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
  @Input() event: IEventModel;


  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }
}
