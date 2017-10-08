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
var MessageComponent = (function () {
    function MessageComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var user = sessionStorage.getItem('loggedInUser');
        var loggedInUser = JSON.parse(user);
        if (loggedInUser && loggedInUser.access_token) {
        }
        else {
            this._router.navigate(['/Login']);
        }
    };
    MessageComponent.prototype.profile = function () {
        this._router.navigate(['/Profile']);
    };
    MessageComponent.prototype.Logout = function () {
        this._userService.Logout();
        this._router.navigate(['/Login']);
    };
    MessageComponent.prototype.messages = function () {
        this._router.navigate(['/Messages']);
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Project/Messages/Message.html',
        providers: [UserService_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, UserService_1.UserService])
], MessageComponent);
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=MessageComponent.js.map