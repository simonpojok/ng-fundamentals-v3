import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'profile.component.html',
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
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  get firstNameControl() {
    return this.profileForm.controls.firstName;
  }

  get lastNameControl() {
    return this.profileForm.controls.lastName;
  }

  get isFirstNameValid(): boolean {
    return this.firstNameControl.valid || this.firstNameControl.untouched;
  }

  get isLastNameValid(): boolean {
    return this.lastNameControl.valid || this.lastNameControl.untouched;
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    const {firstName, lastName} = this.authService.currentUser;
    const firstNameFormControl = new FormControl(
      firstName, [Validators.required]);
    const lastNameFormControl = new FormControl(
      lastName, [Validators.required]);

    this.profileForm = new FormGroup({
      firstName: firstNameFormControl,
      lastName: lastNameFormControl
    });
  }

  async handleSaveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      await this.router.navigate(['events']);
    }
  }

  async handleCancelEditProfile() {
    await this.router.navigate(['events']);
  }

}
