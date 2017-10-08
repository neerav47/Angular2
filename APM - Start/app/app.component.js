"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Angular-2.0 Training";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n       <h1>{{pageTitle}}</h1>,\n      <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Website Name</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/Products\">Products</a></li>\n      <li><a routerLink=\"/Employees\">Employees</a></li>\n      <li><a routerLink=\"/News\">News</a></li>\n      <li><a routerLink=\"/Welcome\">Welcome</a></li>\n      <li><a routerLink=\"/Home\">Home</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/Register\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li><a routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul>\n      </div>\n      </nav>\n      <router-outlet></router-outlet>\n        <router-outlet name='Message'></router-outlet>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map