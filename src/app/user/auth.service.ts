import {Injectable} from '@angular/core';
import {IUserModel} from './iuser.model';

@Injectable()
export class AuthService {
  currentUser: IUserModel = undefined;

  loginUser(username: string, password: string) {
    this.currentUser = {
      username,
      firstName: 'Ojok',
      id: 1,
      lastName: 'Simon Peter'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser = {...this.currentUser, lastName, firstName};
  }
}
