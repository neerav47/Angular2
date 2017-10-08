import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../Services/UserService';
import {Http} from '@angular/http';

@Component ({
templateUrl : 'app/Project/Profile/Profile.html',
providers : [UserService]
})

export class ProfileComponent implements OnInit {
  loggedInUser : any;
  public UserName : any;
  public FirstName : any;
  public LastName : any;
  public Phone: any;
  public Location : any;
  public responseData : any = "";
  constructor(private  _router : Router,private _userService : UserService, private _http : Http){

  }
  ngOnInit(){
    let user = sessionStorage.getItem('loggedInUser');
    let loggedInUser = JSON.parse(user);
    if(loggedInUser && loggedInUser.access_token){
      this.loggedInUser = loggedInUser;
    }
    else {
      this.loggedInUser = {'userName': ''};
      this._router.navigate(['/Login']);
    }
    this._userService.getUserDetails(this.loggedInUser.userName).subscribe((data : any) =>{
      let u = JSON.stringify(data);
      sessionStorage.setItem("User",u);
      this.FirstName = data.FirstName;
      this.LastName = data.LastName;
      this.Phone = data.Phone;
      this.Location = data.Location;
      })
  }

  submit() : void {
    this._userService.ProfileSubmit(this.loggedInUser.userName,this.FirstName,this.LastName,this.Phone,this.Location)
    .subscribe((data : any) => {
      this.responseData = data;
      sessionStorage.removeItem("User");
      let userd = {
        "UserName" : this.loggedInUser.userName,
        "FirstName" : this.FirstName,
        "LastName" : this.LastName,
        "Phone" : this.Phone,
        "Location" : this.Location
      }
      let User = JSON.stringify(userd);
      sessionStorage.setItem("User",User);
    });
  }
  profile(): void {
  this._router.navigate(['/Profile']);
  }

  Logout(){
    this._userService.Logout();
    this._router.navigate(['/Login']);
  }
  messages() : void {
    this._router.navigate(['/Messages']);
  }
}
