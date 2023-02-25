import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3>
      <hr>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
      <button (click)="cancel()" type="button" class="btn btn-default">Cancel</button>
    </div>
  `
})
export class CreateEventComponent {
  constructor(private router: Router) {
  }

  async cancel() {
    await this.router.navigate(['/events']);
  }
}
