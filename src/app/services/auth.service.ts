import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {
  loginStatus = false;
  username = '';
  password = '';
  statusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  logIn(username: string, password: string) {
    this.loginStatus = true;
    this.username = username;
    this.password = password;
    this.statusChanged.emit(this.loginStatus);
  }

  logOut() {
    this.loginStatus = false;
    this.statusChanged.emit(this.loginStatus);
  }

  getLoginStatus(): boolean {
    return this.loginStatus;
  }
}
