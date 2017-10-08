import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IEmployee} from './Employee';
import { DataService } from './DataService';

@Component({
  templateUrl : 'app/Employee/EmployeeDataService/EmployeeDetail.html',
  providers: [DataService]
})

export class EmployeeDetails implements OnInit {
  firstname : string;
  Employees : IEmployee[];
  Employee : IEmployee;
  constructor(private _route : ActivatedRoute, private _dataService : DataService, private _router : Router){
      this.Employees = this._dataService.getEmployees();
  }

  ngOnInit() : void {
    let id = this._route.snapshot.params['id'];
    this.firstname = id;
    this.Employee = this.Employees.find(employee => employee.firstname === this.firstname);
  }
}
