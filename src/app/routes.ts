import {Route} from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolverService, CreateSessionComponent
} from './events';
import {Error404Component} from './errors/404.component';

export const appRoutes: Route[] = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  {path: 'events/sessions/new', component: CreateSessionComponent},
  {path: '404', component: Error404Component},
  {path: 'user', loadChildren: () => import('./user/user.module').then(userModule => userModule.UserModule)},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
