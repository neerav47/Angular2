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
var DataService_1 = require("./DataService");
var EmployeeDetails = (function () {
    function EmployeeDetails(_route, _dataService, _router) {
        this._route = _route;
        this._dataService = _dataService;
        this._router = _router;
        this.Employees = this._dataService.getEmployees();
    }
    EmployeeDetails.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        this.firstname = id;
        this.Employee = this.Employees.find(function (employee) { return employee.firstname === _this.firstname; });
    };
    return EmployeeDetails;
}());
EmployeeDetails = __decorate([
    core_1.Component({
        templateUrl: 'app/Employee/EmployeeDataService/EmployeeDetail.html',
        providers: [DataService_1.DataService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, DataService_1.DataService, router_1.Router])
], EmployeeDetails);
exports.EmployeeDetails = EmployeeDetails;
//# sourceMappingURL=EmployeeDetailComponent.js.map