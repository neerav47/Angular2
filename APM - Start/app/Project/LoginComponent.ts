import {Component,OnInit} from '@angular/core';
import {UserService} from './Services/UserService';
import {Router} from '@angular/router';

@Component({
  template : `<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

  <div class="row">
    <div class="col-lg-4">
    </div>
    <div class="col-lg-4">
      <table class="table">
        <tr><h1>Login</h1>
          <tr>
            <td><b>Username</b></td>
            <td><input type="text" class="form-control" [(ngModel)]="username"  placeholder="Username.."/></td>
          </tr>
          <tr>
            <td><b>Password</b></td>
            <td><input type="password" class="form-control" [(ngModel)]="password"  placeholder="Password.."/></td>
          </tr>
          <tr>
            <td><button class="btn btn-primary" style="width:100px;" (click)="Login()" >Login</button></td><td></td>
          </tr>
        </table>
      </div>
      <div class="col-lg-4"></div>`,
  providers :[UserService]
})

export class LoginComponent implements OnInit {
  public username : string;
  public password : string;
  constructor(private _userService : UserService,private _router : Router){

  }
  ngOnInit(){
    let User  = sessionStorage.getItem("loggedInUser");
    let username = JSON.parse(User);
    if(username && username.access_token){
      this._router.navigate(['/Home']);
    }
}

  Login() : void {
      this._userService.Login(this.username,this.password).subscribe((data : any) =>{this._router.navigate(['/Home'])});
  }

}
