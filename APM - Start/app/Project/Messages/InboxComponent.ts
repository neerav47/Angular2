import {Component,OnInit} from '@angular/core';
import {UserService} from '../Services/UserService';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
templateUrl : 'app/Project/Messages/Inbox.html',
providers :[UserService]
})

export class InboxComponent implements OnInit {

  Messages : any =[];
  Recipient :string;
  constructor(private _router : Router,private _userService : UserService, private _http : Http){

  }
  ngOnInit(){
    let user = sessionStorage.getItem('loggedInUser');
    let loggedInUser = JSON.parse(user);
    let userd = sessionStorage.getItem('User');
    let userDetails = JSON.parse(userd);
    if(loggedInUser && loggedInUser.access_token && userDetails){
        this.Recipient = userDetails.FirstName;
    }
    else {
        this._router.navigate(['/Login']);
    }
    this._http.get('http://localhost:50254/api/Messages/'+this.Recipient).subscribe((data : any) => this.Messages = data.json());
}

detail(message : any) : void {
  this._router.navigate(['/MessageDetail', message.MessageId]);
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
