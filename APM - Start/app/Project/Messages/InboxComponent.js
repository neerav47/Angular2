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
var UserService_1 = require("../Services/UserService");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var InboxComponent = (function () {
    function InboxComponent(_router, _userService, _http) {
        this._router = _router;
        this._userService = _userService;
        this._http = _http;
        this.Messages = [];
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = sessionStorage.getItem('loggedInUser');
        var loggedInUser = JSON.parse(user);
        var userd = sessionStorage.getItem('User');
        var userDetails = JSON.parse(userd);
        if (loggedInUser && loggedInUser.access_token && userDetails) {
            this.Recipient = userDetails.FirstName;
        }
        else {
            this._router.navigate(['/Login']);
        }
        this._http.get('http://localhost:50254/api/Messages/' + this.Recipient).subscribe(function (data) { return _this.Messages = data.json(); });
    };
    InboxComponent.prototype.detail = function (message) {
        this._router.navigate(['/MessageDetail', message.MessageId]);
    };
    InboxComponent.prototype.profile = function () {
        this._router.navigate(['/Profile']);
    };
    InboxComponent.prototype.Logout = function () {
        this._userService.Logout();
        this._router.navigate(['/Login']);
    };
    InboxComponent.prototype.messages = function () {
        this._router.navigate(['/Messages']);
    };
    return InboxComponent;
}());
InboxComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Project/Messages/Inbox.html',
        providers: [UserService_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, UserService_1.UserService, http_1.Http])
], InboxComponent);
exports.InboxComponent = InboxComponent;
//# sourceMappingURL=InboxComponent.js.map