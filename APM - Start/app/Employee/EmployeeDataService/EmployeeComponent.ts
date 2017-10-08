import { Component } from '@angular/core';
import { IEmployee} from './Employee';
import { DataService } from './DataService';
import {Router} from '@angular/router';

@Component({
selector : 'Employee',
templateUrl : 'app/Employee/EmployeeDataService/Employee.html',
  providers: [DataService]
})

export class EmployeeComponent {
  Employees : IEmployee[];
  constructor(private _dataService : DataService, private _route : Router){
    this.Employees = this._dataService.getEmployees();
  }
  onSelected(Employee: any){
    this._route.navigate(['/Employees',Employee.firstname]);
  }
}
