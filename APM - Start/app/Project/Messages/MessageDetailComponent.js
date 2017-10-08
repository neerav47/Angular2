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
var MessageDetailComponent = (function () {
    function MessageDetailComponent(_router, _userService, _route) {
        this._router = _router;
        this._userService = _userService;
        this._route = _route;
        this.Message = [];
    }
    MessageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = sessionStorage.getItem('loggedInUser');
        var loggedInUser = JSON.parse(user);
        var userd = sessionStorage.getItem('User');
        var userDetails = JSON.parse(userd);
        if (loggedInUser && loggedInUser.access_token) {
        }
        else {
            this._router.navigate(['/Login']);
        }
        var id = this._route.snapshot.params['id'];
        this._userService.getMessageById(id).subscribe(function (data) {
            if (data && data.Sender) {
                _this.Message.Sender = data.Sender;
                _this.Message.Title = data.Title;
                _this.Message.Description = data.Description;
                _this.Message.TimeStamp = data.TimeStamp;
            }
            else {
                _this.Message.Sender = "";
                _this.Message.Title = "";
                _this.Message.Description = "";
                _this.Message.TimeStamp = "";
            }
        });
    };
    MessageDetailComponent.prototype.profile = function () {
        this._router.navigate(['/Profile']);
    };
    MessageDetailComponent.prototype.Logout = function () {
        this._userService.Logout();
        this._router.navigate(['/Login']);
    };
    MessageDetailComponent.prototype.messages = function () {
        this._router.navigate(['/Messages']);
    };
    MessageDetailComponent.prototype.back = function () {
        this._router.navigate(['/Inbox']);
    };
    return MessageDetailComponent;
}());
MessageDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Project/Messages/MessageDetail.html',
        providers: [UserService_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, UserService_1.UserService, router_1.ActivatedRoute])
], MessageDetailComponent);
exports.MessageDetailComponent = MessageDetailComponent;
//# sourceMappingURL=MessageDetailComponent.js.map