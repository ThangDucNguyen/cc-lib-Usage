import {Router} from '@angular/router';
import {Component} from '@angular/core';


import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  submitted = false;
  loggingIn = false;

  username = 'VinID';
  password = 'VinID';

  onLogin($event) {
    this.submitted = true;
    this.loggingIn = true;

    const {username, password} = $event;

    this.authService.logIn(username, password);
  }

}



