import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {addWarning} from '@angular-devkit/build-angular/src/utils/webpack-diagnostics';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent {
  mouseoverLogin = false;
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
