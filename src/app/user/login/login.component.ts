import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {addWarning} from '@angular-devkit/build-angular/src/utils/webpack-diagnostics';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userName: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  printItem(item) {
    console.log(item);
  }

  async handleLoginUser(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    await this.router.navigate(['events']);
  }

  async handleCancelLogin() {
    await this.router.navigate(['events']);
  }
}
