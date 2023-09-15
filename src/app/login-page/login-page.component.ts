import { Component, OnInit } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { Route, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public error: boolean = false;
  public form!: Partial<IUserDetails>;
  constructor(public readonly route:Router, public readonly userAuth:UserAuthService){}
  ngOnInit(): void {
    this.form = {
      name:"",
      password: ""
    }
  }

  public onSubmit(){
    let isUserValid = this.userAuth.validateUser(this.form);
    isUserValid?this.route.navigate(['create']): this.error = true;
    
  }

  public onSignUp(){
    this.route.navigate(['signup'])
  }
}
