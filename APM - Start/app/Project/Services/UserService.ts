import {Injectable} from '@angular/core';
import {Http,Response, Headers,HttpModule} from '@angular/http';
import { URLSearchParams } from "@angular/http"

 

@Injectable()

export class UserService{
  LoginResponse : any;
  registerResponse : string;
  constructor(private _http : Http,private _httpModule: HttpModule){

  }

  Login(username : string, password: string) : any {
  let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        let body = urlSearchParams.toString();
  return  this._http.post('http://localhost:50254/token', body + "&grant_type=password")
    .map((response : Response) =>{
      let user = response.json();
      if(user && user.access_token)
      {
        let user1 = JSON.stringify(user);
        sessionStorage.setItem('loggedInUser',user1);
      }
    });
  }

  Logout() :any {
    sessionStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('User');
  }

  Register(email : string, password : string, confirmpassword : string): any {
    var data = "Email=" + email + "&Password=" + password + "&ConfirmPassword="+ confirmpassword;
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post('http://localhost:50254/api/Account/Register', data, {headers : headers} ).map((response : Response) => {
    });
    
  }

  ProfileSubmit(UserName : string, FirstName : string, LastName : string, Phone : string, Location : string) : any {
    var data ="UserName=" + UserName +"&FirstName=" + FirstName + "&LastName=" + LastName + "&Phone=" + Phone + "&Location="+ Location;
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://localhost:50254/api/Users', data, {headers : headers}).map((response : Response) => response.json());
  }

  getUserDetails(UserName : string){
    return this._http.get('http://localhost:50254/api/Users/puser?id='+UserName).map((response : Response) => response.json());
  }

  sendMessage(Sender : string, Recipient : string, Title : string, Description : string, TimeStamp : string) {
    var data = "MessageId=1&Sender=" + Sender + "&Recipient=" + Recipient + "&Title=" + Title + "&Description="+Description+"&TimeStamp="+TimeStamp;
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://localhost:50254/api/Messages',data,{headers:headers}).map((response : Response) =>response.json());
  }

  getMessages(Recipient : string){
    return this._http.get('http://localhost:50254/api/Messages/'+Recipient).map((response : Response) => response.json());
  }

  getMessageById(MessageId : number){
    return this._http.get('http://localhost:50254/api/Messages/GetMessageByIb/'+MessageId).map((response : Response) => response.json());
  }

}
