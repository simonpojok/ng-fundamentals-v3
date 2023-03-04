import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService, IEventModel} from '../shared';

@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px
    }

    .error input {
      background-color: #e3c3c5;
    }

    .error ::-webkit-input-placeholder {
      color: #999;
    }

    .error ::-moz-placeholder {
      color: #999;
    }

    .error :-moz-placeholder {
      color: #999;
    }

    .error :-ms-input-placeholder {
      color: #999;
    }
  `]
})
export class CreateEventComponent {
  isDirty = true;
  newEvent: IEventModel = {
    date: new Date(),
    id: 0,
    imageUrl: '',
    location: {address: '', city: '', country: ''},
    name: '',
    onlineUrl: '',
    price: 0,
    sessions: [],
    time: ''
  };

  constructor(private router: Router, private eventService: EventService) {
  }

  async handleSaveEvent(event: IEventModel) {
    this.eventService.save(event);
    this.isDirty = false;
    await this.router.navigate(['/events']);
  }

  async cancel() {
    await this.router.navigate(['events']);
  }
}
