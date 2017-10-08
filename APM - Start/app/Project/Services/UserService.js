"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.Login = function (username, password) {
        var urlSearchParams = new http_2.URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        var body = urlSearchParams.toString();
        return this._http.post('http://localhost:50254/token', body + "&grant_type=password")
            .map(function (response) {
            var user = response.json();
            if (user && user.access_token) {
                var user1 = JSON.stringify(user);
                sessionStorage.setItem('loggedInUser', user1);
            }
        });
    };
    UserService.prototype.Logout = function () {
        sessionStorage.removeItem('loggedInUser');
        sessionStorage.removeItem('User');
    };
    UserService.prototype.Register = function (email, password, confirmpassword) {
        var data = "Email=" + email + "&Password=" + password + "&ConfirmPassword=" + confirmpassword;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:50254/api/Account/Register', data, { headers: headers }).map(function (response) {
        });
    };
    UserService.prototype.ProfileSubmit = function (UserName, FirstName, LastName, Phone, Location) {
        var data = "UserName=" + UserName + "&FirstName=" + FirstName + "&LastName=" + LastName + "&Phone=" + Phone + "&Location=" + Location;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:50254/api/Users', data, { headers: headers }).map(function (response) { return response.json(); });
    };
    UserService.prototype.getUserDetails = function (UserName) {
        return this._http.get('http://localhost:50254/api/Users/puser?id=' + UserName).map(function (response) { return response.json(); });
    };
    UserService.prototype.sendMessage = function (Sender, Recipient, Title, Description, TimeStamp) {
        var data = "MessageId=1&Sender=" + Sender + "&Recipient=" + Recipient + "&Title=" + Title + "&Description=" + Description + "&TimeStamp=" + TimeStamp;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:50254/api/Messages', data, { headers: headers }).map(function (response) { return response.json(); });
    };
    UserService.prototype.getMessages = function (Recipient) {
        return this._http.get('http://localhost:50254/api/Messages/' + Recipient).map(function (response) { return response.json(); });
    };
    UserService.prototype.getMessageById = function (MessageId) {
        return this._http.get('http://localhost:50254/api/Messages/GetMessageByIb/' + MessageId).map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map