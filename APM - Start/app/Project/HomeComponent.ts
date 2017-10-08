import {Component,OnInit} from '@angular/core';
import {UserService} from './Services/UserService';
import {Router} from '@angular/router';

@Component({
  templateUrl : 'app/Project/Services/Home.html',
  providers : [UserService]
})

export class HomeComponent  {
  loggedInUser : any;
  constructor(private _userService : UserService, private _router : Router){

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
