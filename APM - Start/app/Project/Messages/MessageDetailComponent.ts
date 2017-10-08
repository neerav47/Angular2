import {Component, OnInit} from '@angular/core';
import {UserService}  from '../Services/UserService';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  templateUrl : 'app/Project/Messages/MessageDetail.html',
  providers :[UserService]
})

export class MessageDetailComponent implements OnInit {

  Message : any = [];
  constructor(private _router : Router, private _userService : UserService, private _route : ActivatedRoute){

  }

  ngOnInit() {
    let user = sessionStorage.getItem('loggedInUser');
    let loggedInUser = JSON.parse(user);
    let userd = sessionStorage.getItem('User');
    let userDetails = JSON.parse(userd);
    if(loggedInUser && loggedInUser.access_token){

    }
    else {
        this._router.navigate(['/Login']);
    }
    let id = this._route.snapshot.params['id'];
    this._userService.getMessageById(id).subscribe((data : any) => {
          if(data && data.Sender){
        this.Message.Sender = data.Sender;
        this.Message.Title = data.Title;
        this.Message.Description = data.Description;
        this.Message.TimeStamp = data.TimeStamp;

      }
      else {
        this.Message.Sender = "";
        this.Message.Title = "";
        this.Message.Description = "";
        this.Message.TimeStamp = "";
      }

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
  back() : void{
    this._router.navigate(['/Inbox']);
  }

}
