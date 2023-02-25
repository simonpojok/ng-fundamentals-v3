import {Route} from '@angular/router';
import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';

export const appRoutes: Route[] = [
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
