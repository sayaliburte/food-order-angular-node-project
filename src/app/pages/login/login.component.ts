import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth: Auth = new Auth();
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  login(): void{
    console.log(this.auth);
  }

}
