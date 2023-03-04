import {Component} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userName: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  printItem(item) {
    console.log(item);
  }

  handleLoginUser(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
  }
}
