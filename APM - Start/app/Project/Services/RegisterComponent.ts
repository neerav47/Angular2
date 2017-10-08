import {Component} from '@angular/core';
import {UserService} from './UserService';

@Component({
  templateUrl : 'app/Project/Services/Register.html',
  providers :[UserService]
})

export class RegisterComponent {
  public email : string;
  public password : string;
  public confirmpassword : string;
  public registerResponse : string;
  constructor(private _userService : UserService){

  }
  Register(){
if(this.password == this.confirmpassword){
  this._userService.Register(this.email,this.password,this.confirmpassword).subscribe((data : any) => this.registerResponse = "Registered Successfully! You may now LogIn");
    this.email = "";
    this.password = "";
    this.confirmpassword = "";
    }
  }
 }
