import { Component, OnInit } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';




@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  public form!:IUserDetails;

   
    constructor( public readonly router : Router,private readonly userAuth: UserAuthService){
  }

  ngOnInit(): void {
    this.form = {
      name: "",
      email: "",
      password: "",
      cpassword: ""
    }
  }
  public error = false;
  public onSubmit() {
    if (this.form.password != this.form.cpassword) {
      this.error = true;
    } else {
      this.error = false;
      this.userAuth.setUserDetails(this.form);
      void this.router.navigate(['login']);
    }
  }

  public onReset(){
    this.form = {
      name: "",
      email: "",
      password: "",
      cpassword: ""
    }
  }

}
