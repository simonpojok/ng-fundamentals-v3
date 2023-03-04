import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EventService} from './shared/event.service';
import {map} from 'rxjs/operators';
import {IEventModel} from './shared';

@Injectable()
export class EventsListResolverService implements Resolve<IEventModel[]> {
  constructor(private eventsService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.eventsService.getEvents().pipe(map(events => events));
  }

}
