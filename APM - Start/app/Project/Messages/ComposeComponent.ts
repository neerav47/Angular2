import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../Services/UserService';

@Component ({
  templateUrl: 'app/Project/Messages/Compose.html',
  providers : [UserService]
})

export class ComposeComponent implements OnInit {

  constructor(private _router : Router, private _userService : UserService){

  }
  userFirstName : string;
  Recipient : string;
  Message : string;
  public response : string ="";

  ngOnInit() : void {
    let user = sessionStorage.getItem('loggedInUser');
    let loggedInUser = JSON.parse(user);
    let userd = sessionStorage.getItem('User');
    let userDetails = JSON.parse(userd);
    if(loggedInUser && loggedInUser.access_token){
      this.userFirstName = userDetails.FirstName;
    }
    else {
        this._router.navigate(['/Login']);
    }
  }

  send() : void{
    let s = this.Message;
    let splitted = s.slice(0,30);
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    var dateTime = date +' '+time;
    this._userService.sendMessage(this.userFirstName,this.Recipient,splitted,this.Message,dateTime).subscribe((data : any) => {
      this.response = data;
    });
    this.Recipient = "";
    this.Message = "";
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
