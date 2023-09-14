import { Injectable } from '@angular/core';
import { IUserDetails } from '../app.interface';

@Injectable()
export class UserAuthService {

  constructor() { }

  private userDetails!: IUserDetails;

  public getUserDetails(){
    this.userDetails = JSON.parse(localStorage.getItem("user") as string);
    return this.userDetails;
  }

  public setUserDetails(user:IUserDetails){

    this.userDetails = user;
    localStorage.setItem("user",JSON.stringify(this.userDetails));
  }
 
  public validateUser(user: Partial<IUserDetails>){
    this.getUserDetails();
    return this.userDetails.email == user.email && this.userDetails.password == user.password;
  }

}
