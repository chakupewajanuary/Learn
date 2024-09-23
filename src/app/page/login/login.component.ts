import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  //object for active vissible
  isSignDivVisible: boolean = true;

  //object
  sigUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();
  //constructor
  constructor(private router: Router) {}

  onRegister() {
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.sigUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.sigUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    alert('registration success');
    this.sigUpObj = {
      name: '',
      email: '',
      password: '',
    };
  }
  onLogin() {
    debugger;
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);
      const isUserPresent = users.find(
        (users: SignUpModel) =>
          users.email == this.loginObj.email &&
          users.password == this.loginObj.password
      );
      if (isUserPresent != undefined) {
        alert('user found...');

        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('no user found');
      }
    }
  }
}
export class SignUpModel {
  name: string;
  email: string;
  password: string;
  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}

export class LoginModel {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
