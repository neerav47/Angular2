"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getEmployees = function () {
        return [
            {
                "firstname": "1",
                "lastname": "Gopakumar",
                "email": "arun.gopan@marlabs.com",
                "phone": "34324324323",
                "current_class": "10th"
            },
            {
                "firstname": "2",
                "lastname": "Gopakumar",
                "email": "arun.gopan@marlabs.com",
                "phone": "34324324323",
                "current_class": "10th"
            },
            {
                "firstname": "3",
                "lastname": "Gopakumar",
                "email": "arun.gopan@marlabs.com",
                "phone": "34324324323",
                "current_class": "10th"
            },
            {
                "firstname": "4",
                "lastname": "Gopakumar",
                "email": "arun.gopan@marlabs.com",
                "phone": "34324324323",
                "current_class": "10th"
            },
            {
                "firstname": "5",
                "lastname": "Gopakumar",
                "email": "arun.gopan@marlabs.com",
                "phone": "34324324323",
                "current_class": "10th"
            }
        ];
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=DataService.js.map