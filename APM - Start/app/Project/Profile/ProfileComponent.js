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
var router_1 = require("@angular/router");
var UserService_1 = require("../Services/UserService");
var http_1 = require("@angular/http");
var ProfileComponent = (function () {
    function ProfileComponent(_router, _userService, _http) {
        this._router = _router;
        this._userService = _userService;
        this._http = _http;
        this.responseData = "";
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = sessionStorage.getItem('loggedInUser');
        var loggedInUser = JSON.parse(user);
        if (loggedInUser && loggedInUser.access_token) {
            this.loggedInUser = loggedInUser;
        }
        else {
            this.loggedInUser = { 'userName': '' };
            this._router.navigate(['/Login']);
        }
        this._userService.getUserDetails(this.loggedInUser.userName).subscribe(function (data) {
            var u = JSON.stringify(data);
            sessionStorage.setItem("User", u);
            _this.FirstName = data.FirstName;
            _this.LastName = data.LastName;
            _this.Phone = data.Phone;
            _this.Location = data.Location;
        });
    };
    ProfileComponent.prototype.submit = function () {
        var _this = this;
        this._userService.ProfileSubmit(this.loggedInUser.userName, this.FirstName, this.LastName, this.Phone, this.Location)
            .subscribe(function (data) {
            _this.responseData = data;
            sessionStorage.removeItem("User");
            var userd = {
                "UserName": _this.loggedInUser.userName,
                "FirstName": _this.FirstName,
                "LastName": _this.LastName,
                "Phone": _this.Phone,
                "Location": _this.Location
            };
            var User = JSON.stringify(userd);
            sessionStorage.setItem("User", User);
        });
    };
    ProfileComponent.prototype.profile = function () {
        this._router.navigate(['/Profile']);
    };
    ProfileComponent.prototype.Logout = function () {
        this._userService.Logout();
        this._router.navigate(['/Login']);
    };
    ProfileComponent.prototype.messages = function () {
        this._router.navigate(['/Messages']);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Project/Profile/Profile.html',
        providers: [UserService_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, UserService_1.UserService, http_1.Http])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=ProfileComponent.js.map