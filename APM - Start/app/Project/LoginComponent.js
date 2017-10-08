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
var UserService_1 = require("./Services/UserService");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var User = sessionStorage.getItem("loggedInUser");
        var username = JSON.parse(User);
        if (username && username.access_token) {
            this._router.navigate(['/Home']);
        }
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this._userService.Login(this.username, this.password).subscribe(function (data) { _this._router.navigate(['/Home']); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        template: "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n    </div>\n    <div class=\"col-lg-4\">\n      <table class=\"table\">\n        <tr><h1>Login</h1>\n          <tr>\n            <td><b>Username</b></td>\n            <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\"  placeholder=\"Username..\"/></td>\n          </tr>\n          <tr>\n            <td><b>Password</b></td>\n            <td><input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"  placeholder=\"Password..\"/></td>\n          </tr>\n          <tr>\n            <td><button class=\"btn btn-primary\" style=\"width:100px;\" (click)=\"Login()\" >Login</button></td><td></td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"col-lg-4\"></div>",
        providers: [UserService_1.UserService]
    }),
    __metadata("design:paramtypes", [UserService_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=LoginComponent.js.map