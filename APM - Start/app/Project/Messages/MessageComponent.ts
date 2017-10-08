import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../Services/UserService';

@Component({
  templateUrl : 'app/Project/Messages/Message.html',
  providers : [UserService]
})

export class MessageComponent implements OnInit {


constructor(private _router : Router, private _userService : UserService){}

  ngOnInit(){
    let user = sessionStorage.getItem('loggedInUser');
    let loggedInUser = JSON.parse(user);
    if(loggedInUser && loggedInUser.access_token){

    }
    else {
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
