import { Component, OnInit } from '@angular/core';
import { IUserDetails } from '../app.interface';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  
  public Form!: IUserDetails;
  public signUpForm! : FormGroup<{name:FormControl<any>,email:FormControl<any>,
                                  password:FormControl<any>,confirmPassword:FormControl<any>}>;
   
    constructor( public readonly router : Router,private readonly userAuth: UserAuthService,private readonly fb:FormBuilder){
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name:["",Validators.required],
      email : ["",Validators.compose([Validators.required,this.emailValidator()]) ],
      password: ["",Validators.required],
      confirmPassword : ["",Validators.required]
    });
    
    this.signUpForm.patchValue({
      name: this.Form.name,
      email:this.Form.email,
      password: this.Form.password,
      confirmPassword: this.Form.cpassword
    })

  }
  public error = false;
  public onSubmit() {
    if (this.signUpForm.value.password != this.signUpForm.value.confirmPassword) {
      this.error = true;
    } else {
      this.error = false;
      this.userAuth.setUserDetails(this.signUpForm.value as IUserDetails);
      void this.router.navigate(['login']);
    }
  }

  public onReset(){
    // this.signUpForm.patchValue({
    //   name: "",
    //   email:"",
    //   password:"",
    //   confirmPassword: ""
    // })
    this.signUpForm.reset();
  }

  private emailValidator(): ValidatorFn{
      return (control:AbstractControl): {[key: string]: any} | null=>{
        if(!control.value){
          return null;
        }
        return control.value.includes('@carestack.com') ? null : {invalidEmail : true} 
      }
  }

}
